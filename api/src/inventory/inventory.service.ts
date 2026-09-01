import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { CreateInventoryDto } from './dto/create-inventory.dto';

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateInventoryDto) {
    const variant = await this.prisma.productVariant.findUnique({
      where: { id: dto.variantId },
    });

    if (!variant) {
      throw new NotFoundException('Product variant not found');
    }

    const existing = await this.prisma.inventory.findUnique({
      where: { variantId: dto.variantId },
    });

    if (existing) {
      throw new ConflictException('Inventory already exists for this variant');
    }

    return this.prisma.inventory.create({
      data: dto,
      include: {
        variant: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.inventory.findMany({
      include: {
        variant: {
          include: {
            product: true,
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const inventory = await this.prisma.inventory.findUnique({
      where: { id },
      include: {
        variant: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!inventory) {
      throw new NotFoundException('Inventory not found');
    }

    return inventory;
  }

  async findByVariant(variantId: string) {
    const inventory = await this.prisma.inventory.findUnique({
      where: { variantId },
      include: {
        variant: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!inventory) {
      throw new NotFoundException('Inventory not found for this variant');
    }

    return inventory;
  }

  async update(id: string, dto: UpdateInventoryDto) {
    const inventory = await this.findOne(id);

    if (dto.quantity !== undefined && dto.quantity < inventory.reserved) {
      throw new ConflictException(
        'Quantity cannot be less than reserved stock',
      );
    }

    if (dto.reserved !== undefined && dto.reserved > inventory.quantity) {
      throw new ConflictException('Reserved stock cannot exceed quantity');
    }

    return this.prisma.inventory.update({
      where: { id },
      data: dto,
      include: {
        variant: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.inventory.delete({
      where: { id },
    });
  }
}
