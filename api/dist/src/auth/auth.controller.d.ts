import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthRequest } from './interfaces/auth-request.interface';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            role: import("../../generated/prisma/enums").UserRole;
        };
    }>;
    login(loginDto: LoginDto, response: Response): Promise<{
        message: string;
        user: {
            id: string;
            email: string;
            firstName: string;
            lastName: string;
            role: import("../../generated/prisma/enums").UserRole;
        };
    }>;
    getMe(req: AuthRequest): import("./interfaces/auth-user.interface").AuthUser;
    logout(response: Response): {
        message: string;
    };
}
