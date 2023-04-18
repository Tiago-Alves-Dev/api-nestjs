import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from './base.repository';
import { SalesItemEntity } from 'sales-item/entities/sales-item.entity';


@Injectable()
export class SalesItemRepository extends BaseRepository<SalesItemEntity> {
  constructor(
    @InjectRepository(SalesItemEntity)
    repository: Repository<SalesItemEntity>,
  ) {
    super(repository);
  }
}
