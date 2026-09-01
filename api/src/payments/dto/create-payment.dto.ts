import { IsEnum, IsUUID } from 'class-validator';
import { PaymentMethod } from 'generated/prisma/enums';

export class CreatePaymentDto {
  @IsUUID()
  orderId: string;

  @IsEnum(PaymentMethod)
  method: PaymentMethod;
}
