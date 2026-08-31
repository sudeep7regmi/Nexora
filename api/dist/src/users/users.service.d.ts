import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<{
        firstName: string;
        lastName: string;
        id: string;
        email: string;
        role: import("../../generated/prisma/enums").UserRole;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateById(id: string, dto: UpdateUserDto): Promise<{
        firstName: string;
        lastName: string;
        id: string;
        email: string;
        role: import("../../generated/prisma/enums").UserRole;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
