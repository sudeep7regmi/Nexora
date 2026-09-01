import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, dto: CreateOrderDto) {
    const cart = await this.prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: {
            variant: {
              include: {
                product: true,
                inventory: true,
              },
            },
          },
        },
      },
    });

    if (!cart || cart.items.length === 0) {
      throw new BadRequestException('Cart is empty');
    }

    const address = await this.prisma.address.findFirst({
      where: {
        id: dto.addressId,
        userId,
      },
    });

    if (!address) {
      throw new NotFoundException('Address not found');
    }

    let subtotal = 0;

    for (const item of cart.items) {
      const available =
        (item.variant.inventory?.quantity ?? 0) -
        (item.variant.inventory?.reserved ?? 0);

      if (item.quantity > available) {
        throw new BadRequestException(
          `Insufficient stock for ${item.variant.name}`,
        );
      }

      subtotal += Number(item.variant.price) * item.quantity;
    }

    const shippingFee = subtotal >= 5000 ? 0 : 150;
    const discount = dto.discount ?? 0;
    const total = subtotal + shippingFee - discount;

    const order = await this.prisma.$transaction(async (tx) => {
      const newOrder = await tx.order.create({
        data: {
          userId,
          subtotal,
          shippingFee,
          discount,
          total,

          shippingFullName: address.fullName,
          shippingPhone: address.phone,
          shippingAddress1: address.addressLine1,
          shippingAddress2: address.addressLine2,
          shippingCity: address.city,
          shippingState: address.state,
          shippingPostalCode: address.postalCode,
          shippingCountry: address.country,

          items: {
            create: cart.items.map((item) => ({
              variantId: item.variantId,
              productName: item.variant.product.name,
              variantName: item.variant.name,
              sku: item.variant.sku,
              unitPrice: item.variant.price,
              quantity: item.quantity,
              subtotal: Number(item.variant.price) * item.quantity,
            })),
          },
        },
        include: {
          items: true,
        },
      });

      for (const item of cart.items) {
        if (item.variant.inventory) {
          await tx.inventory.update({
            where: {
              id: item.variant.inventory.id,
            },
            data: {
              reserved: {
                increment: item.quantity,
              },
            },
          });
        }
      }

      await tx.cartItem.deleteMany({
        where: {
          cartId: cart.id,
        },
      });

      return newOrder;
    });

    return order;
  }

  findAll(userId: string) {
    return this.prisma.order.findMany({
      where: { userId },
      include: {
        items: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(userId: string, id: string) {
    const order = await this.prisma.order.findFirst({
      where: {
        id,
        userId,
      },
      include: {
        items: true,
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return order;
  }
}
