"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const health_module_1 = require("./health/health.module");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const addresses_module_1 = require("./addresses/addresses.module");
const categories_module_1 = require("./categories/categories.module");
const products_module_1 = require("./products/products.module");
const product_variants_module_1 = require("./product-variants/product-variants.module");
const inventory_module_1 = require("./inventory/inventory.module");
const carts_module_1 = require("./carts/carts.module");
const orders_module_1 = require("./orders/orders.module");
const payments_module_1 = require("./payments/payments.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            health_module_1.HealthModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            addresses_module_1.AddressedModule,
            categories_module_1.CategoriesModule,
            products_module_1.ProductsModule,
            product_variants_module_1.ProductVariantsModule,
            inventory_module_1.InventoryModule,
            carts_module_1.CartsModule,
            orders_module_1.OrdersModule,
            payments_module_1.PaymentsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map