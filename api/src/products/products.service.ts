import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-products.dto';
import { UpdateProductDto } from './dto/update-products.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const category = await this.prisma.category.findUnique({
      where: {
        id: createProductDto.categoryId,
      },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    const existingProduct = await this.prisma.product.findUnique({
      where: {
        slug: createProductDto.slug,
      },
    });

    if (existingProduct) {
      throw new ConflictException('A product with this slug already exists');
    }

    return this.prisma.product.create({
      data: createProductDto,
      include: {
        category: true,
      },
    });
  }

  findAll() {
    return this.prisma.product.findMany({
      include: {
        category: true,
        variants: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
        variants: {
          include: {
            inventory: true,
          },
        },
      },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    await this.findOne(id);

    if (updateProductDto.categoryId) {
      const category = await this.prisma.category.findUnique({
        where: {
          id: updateProductDto.categoryId,
        },
      });

      if (!category) {
        throw new NotFoundException('Category not found');
      }
    }

    if (updateProductDto.slug) {
      const conflictingProduct = await this.prisma.product.findFirst({
        where: {
          slug: updateProductDto.slug,
          id: {
            not: id,
          },
        },
      });

      if (conflictingProduct) {
        throw new ConflictException('A product with this slug already exists');
      }
    }

    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
      include: {
        category: true,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.product.delete({
      where: { id },
    });
  }
}
