import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

export enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor',
  VIEWER = 'viewer',
}

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'email', type: 'varchar' })
  email: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @Column({ name: 'name_first', type: 'varchar' })
  nameFirst: string;

  @Column({ name: 'name_last', type: 'varchar' })
  nameLast: string;

  @Column({ name: 'birth_date', type: 'timestamp', nullable: true })
  birthDate: Date;

  @Column({ name: 'user_role', type: 'enum', enum: UserRole, default: UserRole.VIEWER })
  role: UserRole;
}