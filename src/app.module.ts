import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [MessagesModule], // ajuda na organização, ao invéz de referenciar todos os controllers e providers aqui no app.module
  // basta importar outros modulos onde referenciam os controllers e providers que tem ligação, por exemplo
  // o MessagesModule referencia os controladores e os providers que gerenciam as mensagens da aplicação de.
  // cada module pode refenciar quantos controllers e providers forem necessários

  controllers: [AppController], // referencia os controllers

  providers: [AppService], // permite que os services sejam usados por todos os controllers,
  //  basta disponibilizá-los com o 'contructor()' dentro do controller que for usar o service
})
export class AppModule {}
