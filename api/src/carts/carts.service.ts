import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { AddCartItemDto } from './dto/add-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';

@Injectable()
export class CartsService {
  constructor(private readonly prisma: PrismaService) {}

  async getOrCreateCart(userId: string) {
    return this.prisma.cart.upsert({
      where: { userId },
      create: { userId },
      update: {},
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
  }

  getCart(userId: string) {
    return this.getOrCreateCart(userId);
  }

  async addItem(userId: string, dto: AddCartItemDto) {
    const variant = await this.prisma.productVariant.findUnique({
      where: { id: dto.variantId },
      include: {
        inventory: true,
      },
    });

    if (!variant) {
      throw new NotFoundException('Product variant not found');
    }

    const availableStock =
      (variant.inventory?.quantity ?? 0) - (variant.inventory?.reserved ?? 0);

    if (dto.quantity > availableStock) {
      throw new NotFoundException('Insufficient stock');
    }

    const cart = await this.prisma.cart.upsert({
      where: { userId },
      create: { userId },
      update: {},
    });

    const existingItem = await this.prisma.cartItem.findUnique({
      where: {
        cartId_variantId: {
          cartId: cart.id,
          variantId: dto.variantId,
        },
      },
    });

    if (existingItem) {
      const newQuantity = existingItem.quantity + dto.quantity;

      if (newQuantity > availableStock) {
        throw new NotFoundException('Insufficient stock');
      }

      return this.prisma.cartItem.update({
        where: { id: existingItem.id },
        data: {
          quantity: newQuantity,
        },
        include: {
          variant: {
            include: {
              product: true,
              inventory: true,
            },
          },
        },
      });
    }

    return this.prisma.cartItem.create({
      data: {
        cartId: cart.id,
        variantId: dto.variantId,
        quantity: dto.quantity,
      },
      include: {
        variant: {
          include: {
            product: true,
            inventory: true,
          },
        },
      },
    });
  }

  async updateItem(userId: string, variantId: string, dto: UpdateCartItemDto) {
    const cart = await this.prisma.cart.findUnique({
      where: { userId },
    });

    if (!cart) {
      throw new NotFoundException('Cart not found');
    }

    const item = await this.prisma.cartItem.findUnique({
      where: {
        cartId_variantId: {
          cartId: cart.id,
          variantId,
        },
      },
      include: {
        variant: {
          include: {
            inventory: true,
          },
        },
      },
    });

    if (!item) {
      throw new NotFoundException('Cart item not found');
    }

    const availableStock =
      (item.variant.inventory?.quantity ?? 0) -
      (item.variant.inventory?.reserved ?? 0);

    if (dto.quantity > availableStock) {
      throw new NotFoundException('Insufficient stock');
    }

    return this.prisma.cartItem.update({
      where: { id: item.id },
      data: {
        quantity: dto.quantity,
      },
      include: {
        variant: {
          include: {
            product: true,
            inventory: true,
          },
        },
      },
    });
  }

  async removeItem(userId: string, variantId: string) {
    const cart = await this.prisma.cart.findUnique({
      where: { userId },
    });

    if (!cart) {
      throw new NotFoundException('Cart not found');
    }

    const item = await this.prisma.cartItem.findUnique({
      where: {
        cartId_variantId: {
          cartId: cart.id,
          variantId,
        },
      },
    });

    if (!item) {
      throw new NotFoundException('Cart item not found');
    }

    return this.prisma.cartItem.delete({
      where: { id: item.id },
    });
  }

  async clearCart(userId: string) {
    const cart = await this.prisma.cart.findUnique({
      where: { userId },
    });

    if (!cart) {
      throw new NotFoundException('Cart not found');
    }

    await this.prisma.cartItem.deleteMany({
      where: {
        cartId: cart.id,
      },
    });

    return {
      message: 'Cart cleared successfully',
    };
  }
}
