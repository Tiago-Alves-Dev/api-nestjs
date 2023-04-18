import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateSalesItemDto } from './dto/create-sales-item.dto';
import { UpdateSalesItemDto } from './dto/update-sales-item.dto';
import { SalesItemRepository } from 'shared/repositories';

@Injectable()
export class SalesItemService {
  constructor(private readonly repository: SalesItemRepository){}

  async create(createSalesItemDto: CreateSalesItemDto, createdBy?: string) {
    const item = await this.repository.create({
      ...createSalesItemDto,
      createdBy,
    });

    return item;
  }

  async findAll() {
    return await this.repository.findAll({
      relations: ['sale']
    });
  }

  async findOne(cod_item: string) {
    const item = await this.repository.findOne({where: {cod_item}});
    
    if (!item) {
      throw new UnauthorizedException('Item não existe');
    }

    return await this.repository.findOne({where: {cod_item}})
  }

  async update(cod_item: string, updateSalesItemDto: UpdateSalesItemDto) {
    const item = await this.repository.findOne({where: {cod_item}});
    
    if (!item) {
      throw new UnauthorizedException('Item não existe');
    }

    return await this.repository.update(
      { cod_item },
      {
        updatedBy: cod_item,
        ...updateSalesItemDto,
      },
    );
  }

  async remove(cod_item: string) {
    const item = await this.repository.findOne({where: {cod_item}});
    
    if (!item) {
      throw new UnauthorizedException('Item não existe');
    }
    
    return await this.repository.delete({ cod_item })
  }
}
