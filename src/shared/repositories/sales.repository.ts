import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from './base.repository';
import { SaleEntity } from 'sales/entities/sale.entity';


@Injectable()
export class SalesRepository extends BaseRepository<SaleEntity> {
  constructor(
    @InjectRepository(SaleEntity)
    repository: Repository<SaleEntity>,
  ) {
    super(repository);
  }
}
