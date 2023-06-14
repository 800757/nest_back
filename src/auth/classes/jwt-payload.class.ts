import { UserRole } from 'src/users/entities/user.entity';
import { IJwtPayload } from '../interfaces/jwt-payload.interface';

export class JwtPayload implements IJwtPayload {
  login: string;
  name: string;
  role: UserRole;
  isActive: boolean;
  streamsViewKey: string;

  toJSON() {
    return {
      login: this.login,
      name: this.name,
      role: this.role,
      isActive: this.isActive,
      streamsViewKey: this.streamsViewKey,
    };
  }
}
