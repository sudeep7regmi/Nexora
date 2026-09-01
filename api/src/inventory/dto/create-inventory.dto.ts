import { IsInt, IsUUID, Min } from 'class-validator';

export class CreateInventoryDto {
  @IsUUID()
  variantId: string;

  @IsInt()
  @Min(0)
  quantity: number;
}
