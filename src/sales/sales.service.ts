import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { SalesRepository } from 'shared/repositories';

@Injectable()
export class SalesService {
  constructor(private readonly repository: SalesRepository){}

  async create(createSaleDto: CreateSaleDto, createdBy?: string) {
    const sale = await this.repository.create({
      ...createSaleDto,
      createdBy,
    });

    return sale;
  }

  async findAll() {
    return await this.repository.findAll({
      relations: ['client']
    });
  }

  async findOne(cod_venda: string) {
    const sale = await this.repository.findOne({where: {cod_venda}});
    
    if (!sale) {
      throw new UnauthorizedException('Venda não existe');
    }

    return await this.repository.findOne({where: {cod_venda}})
  }

  async update(cod_venda: string, updateSaleDto: UpdateSaleDto) {
    const sale = await this.repository.findOne({where: {cod_venda}});
    
    if (!sale) {
      throw new UnauthorizedException('Venda não existe');
    }

    return await this.repository.update(
      { cod_venda },
      {
        updatedBy: cod_venda,
        ...updateSaleDto,
      },
    );
  }

  async remove(cod_venda: string) {
    const sale = await this.repository.findOne({where: {cod_venda}});
    
    if (!sale) {
      throw new UnauthorizedException('Venda não existe');
    }
    
    return await this.repository.delete({ cod_venda })
  }
}
