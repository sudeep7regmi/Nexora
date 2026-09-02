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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OrdersService = class OrdersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
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
            throw new common_1.BadRequestException('Cart is empty');
        }
        const address = await this.prisma.address.findFirst({
            where: {
                id: dto.addressId,
                userId,
            },
        });
        if (!address) {
            throw new common_1.NotFoundException('Address not found');
        }
        let subtotal = 0;
        for (const item of cart.items) {
            const available = (item.variant.inventory?.quantity ?? 0) -
                (item.variant.inventory?.reserved ?? 0);
            if (item.quantity > available) {
                throw new common_1.BadRequestException(`Insufficient stock for ${item.variant.name}`);
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
    findAll(userId) {
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
    async findOne(userId, id) {
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
            throw new common_1.NotFoundException('Order not found');
        }
        return order;
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map