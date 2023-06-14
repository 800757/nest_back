import { JwtService } from '@nestjs/jwt';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import {  Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  private saltRounds: number = Number(
    this.config.get<number>('BCRYPT_SALT_ROUNDS'),
  );
  
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
    ){}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.usersRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    })
    if(existUser) throw new BadRequestException('This email is already exist!')

    const user = await this.usersRepository.save({
      email: createUserDto.email,
      password: await bcrypt.hash(createUserDto.password, this.saltRounds),
      nameFirst: createUserDto.nameFirst,
      nameLast: createUserDto.nameLast,
      birthDate: createUserDto.birthDate,
      role: createUserDto.role,
    })

    const token = this.jwtService.sign({ email: createUserDto.email })

    return { user, token };
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(email: string) {
    return await this.usersRepository.findOne({ where: { email } })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
