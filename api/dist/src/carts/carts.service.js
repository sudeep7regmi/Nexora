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
exports.CartsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CartsService = class CartsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrCreateCart(userId) {
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
    getCart(userId) {
        return this.getOrCreateCart(userId);
    }
    async addItem(userId, dto) {
        const variant = await this.prisma.productVariant.findUnique({
            where: { id: dto.variantId },
            include: {
                inventory: true,
            },
        });
        if (!variant) {
            throw new common_1.NotFoundException('Product variant not found');
        }
        const availableStock = (variant.inventory?.quantity ?? 0) - (variant.inventory?.reserved ?? 0);
        if (dto.quantity > availableStock) {
            throw new common_1.NotFoundException('Insufficient stock');
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
                throw new common_1.NotFoundException('Insufficient stock');
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
    async updateItem(userId, variantId, dto) {
        const cart = await this.prisma.cart.findUnique({
            where: { userId },
        });
        if (!cart) {
            throw new common_1.NotFoundException('Cart not found');
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
            throw new common_1.NotFoundException('Cart item not found');
        }
        const availableStock = (item.variant.inventory?.quantity ?? 0) -
            (item.variant.inventory?.reserved ?? 0);
        if (dto.quantity > availableStock) {
            throw new common_1.NotFoundException('Insufficient stock');
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
    async removeItem(userId, variantId) {
        const cart = await this.prisma.cart.findUnique({
            where: { userId },
        });
        if (!cart) {
            throw new common_1.NotFoundException('Cart not found');
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
            throw new common_1.NotFoundException('Cart item not found');
        }
        return this.prisma.cartItem.delete({
            where: { id: item.id },
        });
    }
    async clearCart(userId) {
        const cart = await this.prisma.cart.findUnique({
            where: { userId },
        });
        if (!cart) {
            throw new common_1.NotFoundException('Cart not found');
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
};
exports.CartsService = CartsService;
exports.CartsService = CartsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CartsService);
//# sourceMappingURL=carts.service.js.map