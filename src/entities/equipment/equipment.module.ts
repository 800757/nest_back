import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EquipmentEntity } from './equipment.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([EquipmentEntity]),
  ],
})
export class EquipmentModule {}