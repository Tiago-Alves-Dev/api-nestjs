import { Module } from '@nestjs/common';
import { DatabaseModule } from './database';
import { UsersModule } from './users/users.module';
import { RepositoryModule } from './shared/repositories/repository.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule } from './clients/clients.module';
import { AuthModule } from './auth/auth.module';
import { SalesModule } from './sales/sales.module';
import { SalesItemModule } from './sales-item/sales-item.module';


@Module({
  imports: [
    RepositoryModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule(),

    UsersModule,
    ClientsModule,
    SalesModule,
    SalesItemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
