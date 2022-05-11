import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {} //disponibiliza o service para ser utilizado

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }
}
