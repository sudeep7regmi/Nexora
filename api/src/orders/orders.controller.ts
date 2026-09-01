import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AuthUser } from '../auth/interfaces/auth-user.interface';

import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';

interface AuthenticatedRequest extends Request {
  user: AuthUser;
}

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Req() req: AuthenticatedRequest, @Body() dto: CreateOrderDto) {
    return this.ordersService.create(req.user.userId, dto);
  }

  @Get()
  findAll(@Req() req: AuthenticatedRequest) {
    return this.ordersService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Req() req: AuthenticatedRequest, @Param('id') id: string) {
    return this.ordersService.findOne(req.user.userId, id);
  }
}
