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
exports.AddressesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AddressesService = class AddressesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
        return this.prisma.$transaction(async (tx) => {
            if (dto.isDefault === true) {
                await tx.address.updateMany({
                    where: {
                        userId,
                        isDefault: false,
                    },
                    data: {
                        isDefault: false,
                    },
                });
            }
            return tx.address.create({
                data: {
                    userId,
                    label: dto.label,
                    fullName: dto.fullName,
                    phone: dto.phone,
                    addressLine1: dto.addressLine1,
                    addressLine2: dto.addressLine2,
                    city: dto.city,
                    state: dto.state,
                    postalCode: dto.postalCode,
                    country: dto.country ?? 'Nepal',
                    isDefault: dto.isDefault ?? false,
                },
            });
        });
    }
    async findAll(userId) {
        return this.prisma.address.findMany({
            where: {
                userId,
            },
            orderBy: [
                {
                    isDefault: 'desc',
                },
                {
                    createdAt: 'desc',
                },
            ],
        });
    }
    async findOne(userId, addressId) {
        const address = await this.prisma.address.findFirst({
            where: {
                id: addressId,
                userId: userId,
            },
        });
        if (!address) {
            throw new common_1.NotFoundException('Address not Found');
        }
        return address;
    }
    async update(userId, addressId, dto) {
        const address = await this.prisma.address.findFirst({
            where: {
                id: addressId,
                userId,
            },
        });
        if (!address) {
            throw new common_1.NotFoundException('Address not found');
        }
        return this.prisma.$transaction(async (tx) => {
            if (dto.isDefault === true) {
                await tx.address.updateMany({
                    where: {
                        userId,
                        isDefault: true,
                        id: {
                            not: addressId,
                        },
                    },
                    data: {
                        isDefault: false,
                    },
                });
            }
            return tx.address.update({
                where: {
                    id: addressId,
                },
                data: dto,
            });
        });
    }
    async remove(userId, addressId) {
        const address = await this.prisma.address.findFirst({
            where: {
                id: addressId,
                userId,
            },
        });
        if (!address) {
            throw new common_1.NotFoundException('Address not found');
        }
        return this.prisma.address.delete({
            where: {
                id: addressId,
            },
        });
    }
};
exports.AddressesService = AddressesService;
exports.AddressesService = AddressesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AddressesService);
//# sourceMappingURL=addresses.service.js.map