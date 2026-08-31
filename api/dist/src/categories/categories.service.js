"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CategoriesService = class CategoriesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCategoryDto) {
        const existingCategory = await this.prisma.category.findFirst({
            where: {
                OR: [
                    { name: createCategoryDto.name },
                    { slug: createCategoryDto.slug },
                ],
            },
        });
        if (existingCategory) {
            throw new common_1.ConflictException(' A category with this name or slug already exists');
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
    async findOne(id) {
        const category = await this.prisma.category.findUnique({
            where: { id },
        });
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        return category;
    }
    async update(id, updateCategoryDto) {
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
                throw new common_1.ConflictException('Category name or slug already exists');
            }
        }
        return this.prisma.category.update({
            where: { id },
            data: updateCategoryDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.category.delete({
            where: { id },
        });
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map