import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AuthUser } from '../auth/interfaces/auth-user.interface';

import { AddCartItemDto } from './dto/add-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { CartsService } from './carts.service';

interface AuthenticatedRequest extends Request {
  user: AuthUser;
}

@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Get()
  getCart(@Req() req: AuthenticatedRequest) {
    return this.cartsService.getCart(req.user.userId);
  }

  @Post('items')
  addItem(@Req() req: AuthenticatedRequest, @Body() dto: AddCartItemDto) {
    return this.cartsService.addItem(req.user.userId, dto);
  }

  @Patch('items/:variantId')
  updateItem(
    @Req() req: AuthenticatedRequest,
    @Param('variantId') variantId: string,
    @Body() dto: UpdateCartItemDto,
  ) {
    return this.cartsService.updateItem(req.user.userId, variantId, dto);
  }

  @Delete('items/:variantId')
  removeItem(
    @Req() req: AuthenticatedRequest,
    @Param('variantId') variantId: string,
  ) {
    return this.cartsService.removeItem(req.user.userId, variantId);
  }

  @Delete()
  clearCart(@Req() req: AuthenticatedRequest) {
    return this.cartsService.clearCart(req.user.userId);
  }
}
