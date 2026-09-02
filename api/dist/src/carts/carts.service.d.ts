import { PrismaService } from '../prisma/prisma.service';
import { AddCartItemDto } from './dto/add-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
export declare class CartsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getOrCreateCart(userId: string): Promise<{
        items: ({
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
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            variantId: string;
            cartId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
    getCart(userId: string): Promise<{
        items: ({
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
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            variantId: string;
            cartId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
    addItem(userId: string, dto: AddCartItemDto): Promise<{
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        quantity: number;
        variantId: string;
        cartId: string;
    }>;
    updateItem(userId: string, variantId: string, dto: UpdateCartItemDto): Promise<{
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        quantity: number;
        variantId: string;
        cartId: string;
    }>;
    removeItem(userId: string, variantId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        quantity: number;
        variantId: string;
        cartId: string;
    }>;
    clearCart(userId: string): Promise<{
        message: string;
    }>;
}
