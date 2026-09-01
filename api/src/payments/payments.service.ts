import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, dto: CreatePaymentDto) {
    const order = await this.prisma.order.findFirst({
      where: {
        id: dto.orderId,
        userId,
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    if (order.paymentStatus === 'PAID') {
      throw new BadRequestException('Order is already paid');
    }

    if (dto.method === 'CASH_ON_DELIVERY') {
      return this.prisma.order.update({
        where: {
          id: order.id,
        },
        data: {
          paymentStatus: 'PENDING',
        },
      });
    }

    // Temporary payment simulation.
    // Real eSewa/Khalti integration comes later.
    return this.prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        paymentStatus: 'PROCESSING',
      },
    });
  }
}
