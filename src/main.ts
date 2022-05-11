import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  /**
   * ValidationPipe é necessario para que os decorators de validação utilizados na aplicação
   * façam a validação de forma automática.
   * A propriedade whitelist filtra as propriedades dos objetos recebidos para passar apenas as propriedades
   * propriedades definidas no PDO.
   */
  await app.listen(3000);
}
bootstrap();
