import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { RepositoryModule } from 'shared/repositories/repository.module';

@Module({
  imports: [RepositoryModule],
  controllers: [SalesController],
  providers: [SalesService]
})
export class SalesModule {}
