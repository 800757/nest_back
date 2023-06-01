import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { EmployeeEntity } from 'src/entities/employee/employee.entity';

export enum EquipmentType {
  printer = 'принтер',
  keyboard = 'клавиатура',
  mouse = 'компьютерная мышь',
  scanner = 'сканер',
  monitor = 'монитор',
  laptop = 'ноутбук',
  phone = 'телефон',
  system_unit = 'системный блок',
}

@Entity('equipment')
export class EquipmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'type', type: 'enum', enum: EquipmentType })
  role: EquipmentType;

  @Column({ name: 'model', type: 'varchar' })
  password: string;

  @ManyToOne((type) => EmployeeEntity, (employee) => employee.equipment)
  employee: EmployeeEntity;

}