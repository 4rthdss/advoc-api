import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  private readonly clients: Client[] = [];
  private id = 1;

  create(createClientDto: CreateClientDto) {
    const newClient = {
      id: this.id,
      name: createClientDto.name,
      email: createClientDto.email,
      cpf: createClientDto.cpf,
      phone: createClientDto.phone,
    };
    this.id = this.id + 1;
    this.clients.push(newClient);
    return newClient;
  }

  findAll() {
    return this.clients;
  }

  findOne(id: number) {
    const client = this.clients.find((client) => client.id == id);
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    return client;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
