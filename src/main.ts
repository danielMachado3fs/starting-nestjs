import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // necessario para que os decorators de validação utilizados na aplicação façam a validação
  // de forma automática
  await app.listen(3000);
}
bootstrap();
