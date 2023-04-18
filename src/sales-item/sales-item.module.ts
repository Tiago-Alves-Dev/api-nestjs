import { Module } from '@nestjs/common';
import { SalesItemService } from './sales-item.service';
import { SalesItemController } from './sales-item.controller';
import { RepositoryModule } from 'shared/repositories/repository.module';

@Module({
  imports: [RepositoryModule],
  controllers: [SalesItemController],
  providers: [SalesItemService]
})
export class SalesItemModule {}
