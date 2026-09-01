import { IsOptional, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  addressId: string;

  @IsOptional()
  discount?: number;
}
