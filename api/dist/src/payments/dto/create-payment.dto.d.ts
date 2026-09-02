import { PaymentMethod } from "../../../generated/prisma/enums";
export declare class CreatePaymentDto {
    orderId: string;
    method: PaymentMethod;
}
