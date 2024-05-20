import { Client } from '../entities/client.entity';

export class CreateClientDto implements Client {
  id: string;
  name: string;
  email: string;
  birthday: string;
  cpf: string;
  road: string;
  neighborhood: string;
  city: string;
  createdAt: Date;
}
