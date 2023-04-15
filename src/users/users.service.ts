import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from 'shared/repositories';



@Injectable()
export class UsersService {
  constructor(
    private readonly repository: UserRepository,
  ) {}
  async create(createUserDto: CreateUserDto, createdBy?: string) {
    const user = await this.repository.create({
      ...createUserDto,
      createdBy,
    });

    return user;
  }

  async findAll() {
    return await this.repository.findAll({});
  }

  async findOne(cod_usuario: string) {
    return await this.repository.findOne({where: {cod_usuario}});
  }

  async update(cod_usuario: string, updateUserDto: UpdateUserDto) {
    return await this.repository.update(
      { cod_usuario },
      {
        updatedBy: cod_usuario,
        ...updateUserDto,
      },
    );
  }

  async remove(cod_usuario: string) {
    return await this.repository.delete({ cod_usuario });
  }
}
