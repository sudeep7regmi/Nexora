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
exports.InventoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InventoryService = class InventoryService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const variant = await this.prisma.productVariant.findUnique({
            where: { id: dto.variantId },
        });
        if (!variant) {
            throw new common_1.NotFoundException('Product variant not found');
        }
        const existing = await this.prisma.inventory.findUnique({
            where: { variantId: dto.variantId },
        });
        if (existing) {
            throw new common_1.ConflictException('Inventory already exists for this variant');
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
    async findOne(id) {
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
            throw new common_1.NotFoundException('Inventory not found');
        }
        return inventory;
    }
    async findByVariant(variantId) {
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
            throw new common_1.NotFoundException('Inventory not found for this variant');
        }
        return inventory;
    }
    async update(id, dto) {
        const inventory = await this.findOne(id);
        if (dto.quantity !== undefined && dto.quantity < inventory.reserved) {
            throw new common_1.ConflictException('Quantity cannot be less than reserved stock');
        }
        if (dto.reserved !== undefined && dto.reserved > inventory.quantity) {
            throw new common_1.ConflictException('Reserved stock cannot exceed quantity');
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
    async remove(id) {
        await this.findOne(id);
        return this.prisma.inventory.delete({
            where: { id },
        });
    }
};
exports.InventoryService = InventoryService;
exports.InventoryService = InventoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InventoryService);
//# sourceMappingURL=inventory.service.js.map