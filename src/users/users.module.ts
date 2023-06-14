import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]),
  JwtModule.registerAsync({
    imports: [ConfigModule],
    useFactory: (ConfigService: ConfigService) => ({
      secret:ConfigService.get('JWT_SECRET'),
      signOptions: { expiresIn: '30d'},
    }),
    inject: [ConfigService],
  }),
],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
