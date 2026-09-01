import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateProductVariantDto } from './dto/create-product-variant.dto';
import { UpdateProductVariantDto } from './dto/update-product-variant.dto';

@Injectable()
export class ProductVariantsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductVariantDto: CreateProductVariantDto) {
    const product = await this.prisma.product.findUnique({
      where: {
        id: createProductVariantDto.productId,
      },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    const existingVariant = await this.prisma.productVariant.findUnique({
      where: {
        sku: createProductVariantDto.sku,
      },
    });

    if (existingVariant) {
      throw new ConflictException('A variant with this SKU already exists');
    }

    return this.prisma.productVariant.create({
      data: createProductVariantDto,
      include: {
        product: true,
        inventory: true,
      },
    });
  }

  findAll() {
    return this.prisma.productVariant.findMany({
      include: {
        product: true,
        inventory: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const variant = await this.prisma.productVariant.findUnique({
      where: { id },
      include: {
        product: true,
        inventory: true,
      },
    });

    if (!variant) {
      throw new NotFoundException('Product variant not found');
    }

    return variant;
  }

  async update(id: string, updateProductVariantDto: UpdateProductVariantDto) {
    await this.findOne(id);

    if (updateProductVariantDto.productId) {
      const product = await this.prisma.product.findUnique({
        where: {
          id: updateProductVariantDto.productId,
        },
      });

      if (!product) {
        throw new NotFoundException('Product not found');
      }
    }

    if (updateProductVariantDto.sku) {
      const existingVariant = await this.prisma.productVariant.findFirst({
        where: {
          sku: updateProductVariantDto.sku,
          id: {
            not: id,
          },
        },
      });

      if (existingVariant) {
        throw new ConflictException('A variant with this SKU already exists');
      }
    }

    return this.prisma.productVariant.update({
      where: { id },
      data: updateProductVariantDto,
      include: {
        product: true,
        inventory: true,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.productVariant.delete({
      where: { id },
    });
  }
}
