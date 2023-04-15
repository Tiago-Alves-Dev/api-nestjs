import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const logger = new Logger('HttpsServer');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap().then(() => {
  logger.log('# # # # # # # # # # # # # # # # # # # # # # # # #');
  logger.log('# # # # # # # # # # # # # # # # # # # # # # # # #');
  logger.log('# # # # # # #                       # # # # # # #');
  logger.log('# # # # # # #      CRUD SIMPLE      # # # # # # #');
  logger.log('# # # # # # #    NESTJS AND NODEJS  # # # # # # #');
  logger.log('# # # # # # #                       # # # # # # #');
  logger.log('# # # # # # #        by Tiago       # # # # # # #');
  logger.log('# # # # # # #     R E S T  A P I    # # # # # # #');
  logger.log('# # # # # # #                       # # # # # # #');
  logger.log('# # # # # # #      D E S E N V      # # # # # # #');
  logger.log('# # # # # # #                       # # # # # # #');
  logger.log('# # # # # # # # # # # # # # # # # # # # # # # # #');
  logger.log('# # # # # # # # # # # # # # # # # # # # # # # # #');
  logger.log('Application is listening on port 3000');
});
