"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethod = exports.PaymentStatus = exports.OrderStatus = exports.UserRole = void 0;
exports.UserRole = {
    CUSTOMER: 'CUSTOMER',
    ADMIN: 'ADMIN'
};
exports.OrderStatus = {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    PROCESSING: 'PROCESSING',
    SHIPPED: 'SHIPPED',
    DELIVERED: 'DELIVERED',
    CANCELLED: 'CANCELLED'
};
exports.PaymentStatus = {
    PENDING: 'PENDING',
    PROCESSING: 'PROCESSING',
    PAID: 'PAID',
    FAILED: 'FAILED',
    REFUNDED: 'REFUNDED',
    CANCELLED: 'CANCELLED'
};
exports.PaymentMethod = {
    CASH_ON_DELIVERY: 'CASH_ON_DELIVERY',
    CARD: 'CARD',
    ESEWA: 'ESEWA',
    KHALTI: 'KHALTI'
};
//# sourceMappingURL=enums.js.map