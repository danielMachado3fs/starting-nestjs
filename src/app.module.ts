import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';

@Module({
  imports: [],
  controllers: [AppController, MessagesController],
  providers: [AppService, MessagesService], //permite que os services sejam usados por todos os controllers, basta disponibilizá-los com o 'contructor()'
})
export class AppModule {}
