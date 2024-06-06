import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import validators from 'src/util/validators';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  async create(body: CreateUserDto) {
    if (!validators.isValidEmail(body.email)) {
      throw new BadRequestException('Invalid email address');
    }

    await this.repository.save(body);
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<User> {
    return this.repository.findOne({
      where: {
        id: id,
      },
    });
  }

  public async update(id: string, body: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    if (!user) {
      throw new BadRequestException('Client not found');
    }

    if (body.email && !validators.isValidEmail(body.email)) {
      throw new BadRequestException('Invalid email address');
    }

    return await this.repository.save(body);
  }

  public async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    if (!user) {
      throw new BadRequestException('Client not found');
    }

    await this.repository.remove(user);
  }

  public async login(body: LoginUserDto): Promise<void> {
    const user = await this.repository.findOne({
      where: { email: body.email, password: body.password },
    });
    if (!user) {
      throw new BadRequestException('Login inválido');
    }
  }
}
