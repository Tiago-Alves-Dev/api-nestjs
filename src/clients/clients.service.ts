import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientRepository } from 'shared/repositories';

@Injectable()
export class ClientsService {
  constructor(
    private readonly repository: ClientRepository,
  ) {}

  async create(createClientDto: CreateClientDto, createdBy?: string) {
    const client = await this.repository.create({
      ...createClientDto,
      createdBy,
    });

    return client;
  }

  async findAll() {
    return await this.repository.findAll({});
  }

  async findOne(cod_cliente: string) {
    return await this.repository.findOne({where: {cod_cliente}})
  }

  async update(cod_cliente: string, updateClientDto: UpdateClientDto) {
    return await this.repository.update(
      { cod_cliente },
      {
        updatedBy: cod_cliente,
        ...updateClientDto,
      },
    );
  }

  async remove(cod_cliente: string) {
    return await this.repository.delete({ cod_cliente })
  }
}
