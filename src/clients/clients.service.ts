import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  @InjectRepository(Client)
  private readonly repository: Repository<Client>;

  public create(body: CreateClientDto): Promise<Client> {
    const client: Client = new Client();

    Object.assign(client, {
      name: body.name,
      email: body.email,
      birthday: body.birthday,
      cpf: body.cpf,
      road: body.road,
      neighborhood: body.neighborhood,
      city: body.city,
    });

    return this.repository.save(client);
  }

  public findAll(): Promise<Client[]> {
    return this.repository.find();
  }

  public findOne(id: string): Promise<Client> {
    return this.repository.findOne({
      where: {
        id: id,
      },
    });
  }

  public async update(id: string, body: UpdateClientDto): Promise<Client> {
    const client = await this.findOne(id);
    if (!client) {
      throw new Error('Client not found');
    }

    Object.assign(client, body);

    return await this.repository.save(client);
  }

  public async remove(id: string): Promise<void> {
    const client = await this.findOne(id);
    if (!client) {
      throw new NotFoundException('Client not found');
    }

    await this.repository.remove(client);
  }
}
