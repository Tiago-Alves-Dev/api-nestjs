import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { RepositoryModule } from 'shared/repositories/repository.module';
@Module({
  imports: [RepositoryModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
