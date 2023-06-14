import { UserRole } from 'src/users/entities/user.entity';

export interface IJwtPayload {
  login: string;
  name: string;
  role: UserRole;
  isActive: boolean;
  streamsViewKey: string;

  toJSON();
}
