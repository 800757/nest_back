import { IsEmail, MinLength } from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class CreateUserDto {
    @IsEmail()
    email: string;
    
    @MinLength(6,{ message: 'Password must be more then 6 symbols'})
    password: string;
    nameFirst: string;
    nameLast: string;
    birthDate: Date;
    role: UserRole;
}
