import { PrismaService } from '../prisma/prisma.service';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { CreateInventoryDto } from './dto/create-inventory.dto';
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateInventoryDto): Promise<{
        variant: {
            product: {
                id: string;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                slug: string;
                description: string | null;
                categoryId: string;
                brand: string | null;
            };
        } & {
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            productId: string;
            sku: string;
            price: import("@prisma/client-runtime-utils").Decimal;
        };
    } & {
        id: string;
        updatedAt: Date;
        quantity: number;
        reserved: number;
        variantId: string;
    }>;
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        variant: {
            product: {
                id: string;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                slug: string;
                description: string | null;
                categoryId: string;
                brand: string | null;
            };
        } & {
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            productId: string;
            sku: string;
            price: import("@prisma/client-runtime-utils").Decimal;
        };
    } & {
        id: string;
        updatedAt: Date;
        quantity: number;
        reserved: number;
        variantId: string;
    })[]>;
    findOne(id: string): Promise<{
        variant: {
            product: {
                id: string;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                slug: string;
                description: string | null;
                categoryId: string;
                brand: string | null;
            };
        } & {
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            productId: string;
            sku: string;
            price: import("@prisma/client-runtime-utils").Decimal;
        };
    } & {
        id: string;
        updatedAt: Date;
        quantity: number;
        reserved: number;
        variantId: string;
    }>;
    findByVariant(variantId: string): Promise<{
        variant: {
            product: {
                id: string;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                slug: string;
                description: string | null;
                categoryId: string;
                brand: string | null;
            };
        } & {
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            productId: string;
            sku: string;
            price: import("@prisma/client-runtime-utils").Decimal;
        };
    } & {
        id: string;
        updatedAt: Date;
        quantity: number;
        reserved: number;
        variantId: string;
    }>;
    update(id: string, dto: UpdateInventoryDto): Promise<{
        variant: {
            product: {
                id: string;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                slug: string;
                description: string | null;
                categoryId: string;
                brand: string | null;
            };
        } & {
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            productId: string;
            sku: string;
            price: import("@prisma/client-runtime-utils").Decimal;
        };
    } & {
        id: string;
        updatedAt: Date;
        quantity: number;
        reserved: number;
        variantId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        updatedAt: Date;
        quantity: number;
        reserved: number;
        variantId: string;
    }>;
}
