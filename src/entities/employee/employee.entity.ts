import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'
import { EquipmentEntity } from '../equipment/equipment.entity';

@Entity('employee')
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'email', type: 'varchar' })
  email: string;

  @Column({ name: 'committee', type: 'varchar' })
  committee: string;

  @OneToMany((type) => EquipmentEntity, (equipment) => equipment.employee)
  @JoinColumn()
  equipment: Array<EquipmentEntity>;
  
}