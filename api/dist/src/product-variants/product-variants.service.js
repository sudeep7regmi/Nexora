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
exports.ProductVariantsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductVariantsService = class ProductVariantsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProductVariantDto) {
        const product = await this.prisma.product.findUnique({
            where: {
                id: createProductVariantDto.productId,
            },
        });
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        const existingVariant = await this.prisma.productVariant.findUnique({
            where: {
                sku: createProductVariantDto.sku,
            },
        });
        if (existingVariant) {
            throw new common_1.ConflictException('A variant with this SKU already exists');
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
    async findOne(id) {
        const variant = await this.prisma.productVariant.findUnique({
            where: { id },
            include: {
                product: true,
                inventory: true,
            },
        });
        if (!variant) {
            throw new common_1.NotFoundException('Product variant not found');
        }
        return variant;
    }
    async update(id, updateProductVariantDto) {
        await this.findOne(id);
        if (updateProductVariantDto.productId) {
            const product = await this.prisma.product.findUnique({
                where: {
                    id: updateProductVariantDto.productId,
                },
            });
            if (!product) {
                throw new common_1.NotFoundException('Product not found');
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
                throw new common_1.ConflictException('A variant with this SKU already exists');
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
    async remove(id) {
        await this.findOne(id);
        return this.prisma.productVariant.delete({
            where: { id },
        });
    }
};
exports.ProductVariantsService = ProductVariantsService;
exports.ProductVariantsService = ProductVariantsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductVariantsService);
//# sourceMappingURL=product-variants.service.js.map