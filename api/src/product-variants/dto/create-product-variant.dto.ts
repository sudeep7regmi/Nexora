import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateProductVariantDto {
  @IsUUID()
  productId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  sku: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
