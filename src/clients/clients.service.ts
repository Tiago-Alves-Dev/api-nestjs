import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientRepository } from 'shared/repositories';
import { Not } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(private readonly repository: ClientRepository) {}

  async create(createClientDto: CreateClientDto, createdBy?: string) {
    const clientExist = await this.repository.findOne({
      where: { des_contato: createClientDto.des_contato },
    });

    if (clientExist) {
      throw new UnauthorizedException('Campo contato já cadastrado');
    }

    const client = await this.repository.create({
      ...createClientDto,
      createdBy,
    });

    return client;
  }

  async findAll() {
    return await this.repository.findAll({
      order: { createdAt: 'DESC' },
    });
  }

  async findAllActive() {
    return await this.repository.findAll({
      where: { flg_inativo: false },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(cod_cliente: string) {
    const client = await this.repository.findOne({ where: { cod_cliente } });

    if (!client) {
      throw new UnauthorizedException('Cliente não existe');
    }

    return await this.repository.findOne({ where: { cod_cliente } });
  }

  async update(cod_cliente: string, updateClientDto: UpdateClientDto) {
    const client = await this.repository.findOne({ where: { cod_cliente } });

    if (!client) {
      throw new UnauthorizedException('Cliente não existe');
    }

    const clientExist = await this.repository.findOne({
      where: {
        des_contato: updateClientDto.des_contato,
        cod_cliente: Not(cod_cliente),
      },
    });

    if (clientExist) {
      throw new UnauthorizedException('Campo contato já cadastrado');
    }

    return await this.repository.update(
      { cod_cliente },
      {
        updatedBy: cod_cliente,
        ...updateClientDto,
      },
    );
  }

  async remove(cod_cliente: string) {
    const client = await this.repository.findOne({
      where: { cod_cliente },
      relations: ['sales'],
    });

    if (!client) {
      throw new UnauthorizedException('Cliente não existe');
    }

    if (client.sales.length > 0) {
      throw new UnauthorizedException(
        'Cliente com venda vinculada! Por favor desvincule a venda para poder apagar o cliente',
      );
    }

    return await this.repository.delete({ cod_cliente });
  }
}
