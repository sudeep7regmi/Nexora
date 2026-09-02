import { Request } from 'express';
import { AuthUser } from '../auth/interfaces/auth-user.interface';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentsService } from './payments.service';
interface AuthenticatedRequest extends Request {
    user: AuthUser;
}
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(req: AuthenticatedRequest, dto: CreatePaymentDto): Promise<{
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
