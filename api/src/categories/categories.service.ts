import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const existingCategory = await this.prisma.category.findFirst({
      where: {
        OR: [
          { name: createCategoryDto.name },
          { slug: createCategoryDto.slug },
        ],
      },
    });

    if (existingCategory) {
      throw new ConflictException(
        ' A category with this name or slug already exists',
      );
    }

    return this.prisma.category.create({
      data: createCategoryDto,
    });
  }

  async findAll() {
    return this.prisma.category.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    await this.findOne(id);

    if (updateCategoryDto.name || updateCategoryDto.slug) {
      const conflictingCategory = await this.prisma.category.findFirst({
        where: {
          AND: [
            {
              id: {
                not: id,
              },
            },
            {
              OR: [
                ...(updateCategoryDto.name
                  ? [
                      {
                        name: updateCategoryDto.name,
                      },
                    ]
                  : []),
                ...(updateCategoryDto.slug
                  ? [{ slug: updateCategoryDto.slug }]
                  : []),
              ],
            },
          ],
        },
      });

      if (conflictingCategory) {
        throw new ConflictException('Category name or slug already exists');
      }
    }

    return this.prisma.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.category.delete({
      where: { id },
    });
  }
}
