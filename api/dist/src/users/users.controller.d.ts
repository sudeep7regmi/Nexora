import { UsersService } from './users.service';
import { AuthenticatedRequest } from "../auth/interfaces/authenticated-request.interface";
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMe(req: AuthenticatedRequest): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string;
        lastName: string;
        role: import("../../generated/prisma/enums").UserRole;
        isActive: boolean;
    }>;
    updateMe(req: AuthenticatedRequest, dto: UpdateUserDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string;
        lastName: string;
        role: import("../../generated/prisma/enums").UserRole;
        isActive: boolean;
    }>;
}
