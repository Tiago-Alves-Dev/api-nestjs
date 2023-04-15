import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { RepositoryModule } from 'shared/repositories/repository.module';

@Module({
  imports: [RepositoryModule],
  controllers: [ClientsController],
  providers: [ClientsService]
})
export class ClientsModule {}
