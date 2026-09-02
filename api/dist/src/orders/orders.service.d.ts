import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(userId: string, dto: CreateOrderDto): Promise<{
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
    findAll(userId: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    findOne(userId: string, id: string): Promise<{
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
