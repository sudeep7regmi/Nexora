import { ProductVariantsService } from './product-variants.service';
import { CreateProductVariantDto } from './dto/create-product-variant.dto';
import { UpdateProductVariantDto } from './dto/update-product-variant.dto';
export declare class ProductVariantsController {
    private readonly productVariantsService;
    constructor(productVariantsService: ProductVariantsService);
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
    create(dto: CreateProductVariantDto): Promise<{
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
    update(id: string, dto: UpdateProductVariantDto): Promise<{
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
