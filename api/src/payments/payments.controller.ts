import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AuthUser } from '../auth/interfaces/auth-user.interface';

import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentsService } from './payments.service';

interface AuthenticatedRequest extends Request {
  user: AuthUser;
}

@Controller('payments')
@UseGuards(JwtAuthGuard)
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  create(@Req() req: AuthenticatedRequest, @Body() dto: CreatePaymentDto) {
    return this.paymentsService.create(req.user.userId, dto);
  }
}
