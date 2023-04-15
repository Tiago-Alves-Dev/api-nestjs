import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from './base.repository';
import { ClientEntity } from 'shared/entities';


@Injectable()
export class ClientRepository extends BaseRepository<ClientEntity> {
  constructor(
    @InjectRepository(ClientEntity)
    repository: Repository<ClientEntity>,
  ) {
    super(repository);
  }
}
