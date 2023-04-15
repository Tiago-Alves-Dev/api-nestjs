import { Module } from '@nestjs/common';
import { DatabaseModule } from './database';
import { UsersModule } from './users/users.module';
import { RepositoryModule } from './shared/repositories/repository.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [
    RepositoryModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule(),

    UsersModule,

    ClientsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
