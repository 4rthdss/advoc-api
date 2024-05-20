import { User } from '../entities/user.entity';

export class CreateUserDto implements User {
  name: string;
  email: string;
  oabSerial: string;
  phone: string;
  password: string;
  id: string;
  createdAt: Date;
}
