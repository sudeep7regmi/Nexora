import { Request } from 'express';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';
interface AuthenticatedRequest extends Request {
    user: AuthUser;
}
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(req: AuthenticatedRequest, dto: CreateOrderDto): Promise<{
        items: {
            id: string;
            createdAt: Date;
            sku: string;
            quantity: number;
            variantId: string;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            productName: string;
            variantName: string;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            orderId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        discount: import("@prisma/client-runtime-utils").Decimal;
        status: import("../../generated/prisma/enums").OrderStatus;
        paymentStatus: import("../../generated/prisma/enums").PaymentStatus;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        shippingFee: import("@prisma/client-runtime-utils").Decimal;
        total: import("@prisma/client-runtime-utils").Decimal;
        shippingFullName: string;
        shippingPhone: string;
        shippingAddress1: string;
        shippingAddress2: string | null;
        shippingCity: string;
        shippingState: string | null;
        shippingPostalCode: string;
        shippingCountry: string;
    }>;
    findAll(req: AuthenticatedRequest): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        items: {
            id: string;
            createdAt: Date;
            sku: string;
            quantity: number;
            variantId: string;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            productName: string;
            variantName: string;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            orderId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        discount: import("@prisma/client-runtime-utils").Decimal;
        status: import("../../generated/prisma/enums").OrderStatus;
        paymentStatus: import("../../generated/prisma/enums").PaymentStatus;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        shippingFee: import("@prisma/client-runtime-utils").Decimal;
        total: import("@prisma/client-runtime-utils").Decimal;
        shippingFullName: string;
        shippingPhone: string;
        shippingAddress1: string;
        shippingAddress2: string | null;
        shippingCity: string;
        shippingState: string | null;
        shippingPostalCode: string;
        shippingCountry: string;
    })[]>;
    findOne(req: AuthenticatedRequest, id: string): Promise<{
        items: {
            id: string;
            createdAt: Date;
            sku: string;
            quantity: number;
            variantId: string;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            productName: string;
            variantName: string;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            orderId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        discount: import("@prisma/client-runtime-utils").Decimal;
        status: import("../../generated/prisma/enums").OrderStatus;
        paymentStatus: import("../../generated/prisma/enums").PaymentStatus;
        subtotal: import("@prisma/client-runtime-utils").Decimal;
        shippingFee: import("@prisma/client-runtime-utils").Decimal;
        total: import("@prisma/client-runtime-utils").Decimal;
        shippingFullName: string;
        shippingPhone: string;
        shippingAddress1: string;
        shippingAddress2: string | null;
        shippingCity: string;
        shippingState: string | null;
        shippingPostalCode: string;
        shippingCountry: string;
    }>;
}
export {};
