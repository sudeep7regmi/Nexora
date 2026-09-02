import { PrismaService } from '../prisma/prisma.service';
import { CreateProductVariantDto } from './dto/create-product-variant.dto';
import { UpdateProductVariantDto } from './dto/update-product-variant.dto';
export declare class ProductVariantsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProductVariantDto: CreateProductVariantDto): Promise<{
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
        inventory: {
            id: string;
            updatedAt: Date;
            quantity: number;
            reserved: number;
            variantId: string;
        } | null;
    } & {
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        productId: string;
        sku: string;
        price: import("@prisma/client-runtime-utils").Decimal;
    }>;
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
        inventory: {
            id: string;
            updatedAt: Date;
            quantity: number;
            reserved: number;
            variantId: string;
        } | null;
    } & {
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        productId: string;
        sku: string;
        price: import("@prisma/client-runtime-utils").Decimal;
    })[]>;
    findOne(id: string): Promise<{
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
        inventory: {
            id: string;
            updatedAt: Date;
            quantity: number;
            reserved: number;
            variantId: string;
        } | null;
    } & {
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        productId: string;
        sku: string;
        price: import("@prisma/client-runtime-utils").Decimal;
    }>;
    update(id: string, updateProductVariantDto: UpdateProductVariantDto): Promise<{
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
        inventory: {
            id: string;
            updatedAt: Date;
            quantity: number;
            reserved: number;
            variantId: string;
        } | null;
    } & {
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        productId: string;
        sku: string;
        price: import("@prisma/client-runtime-utils").Decimal;
    }>;
    remove(id: string): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        productId: string;
        sku: string;
        price: import("@prisma/client-runtime-utils").Decimal;
    }>;
}
