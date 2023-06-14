import { UsersService } from './../users/users.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './classes/jwt-payload.class';
import { IJwtPayload } from './interfaces/jwt-payload.interface';
import { IUser } from 'src/interface/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly UsersService: UsersService,
    private readonly jwtService: JwtService
    ) {}

  async validateUser(email: string, password: string) {
    const user = await this.UsersService.findOne(email);
    const passportIsMatch = await bcrypt.compare(user.password, password);
    if (user && passportIsMatch) {
      return user;
    }
    throw new BadRequestException('User or password are incorrect');
  }

  async login(user: IUser) {
    const { id, email } = user;
      return{
        id,
        email, 
        token: this.jwtService.sign({ id: user.id, email: user.email })
      }
    
  }
}
