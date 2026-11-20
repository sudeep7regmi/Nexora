import { Request } from 'express';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { AddCartItemDto } from './dto/add-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { CartsService } from './carts.service';
interface AuthenticatedRequest extends Request {
    user: AuthUser;
}
export declare class CartsController {
    private readonly cartsService;
    constructor(cartsService: CartsService);
    getCart(req: AuthenticatedRequest): Promise<{
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
                    variantId: string;
                    quantity: number;
                    reserved: number;
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
            variantId: string;
            quantity: number;
            cartId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }>;
    addItem(req: AuthenticatedRequest, dto: AddCartItemDto): Promise<{
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
                variantId: string;
                quantity: number;
                reserved: number;
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
        variantId: string;
        quantity: number;
        cartId: string;
    }>;
    updateItem(req: AuthenticatedRequest, variantId: string, dto: UpdateCartItemDto): Promise<{
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
                variantId: string;
                quantity: number;
                reserved: number;
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
        variantId: string;
        quantity: number;
        cartId: string;
    }>;
    removeItem(req: AuthenticatedRequest, variantId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        variantId: string;
        quantity: number;
        cartId: string;
    }>;
    clearCart(req: AuthenticatedRequest): Promise<{
        message: string;
    }>;
}
export {};
