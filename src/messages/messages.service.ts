import { Injectable } from '@nestjs/common';
import { Message } from './Message';

@Injectable()
export class MessagesService {
  private messages = [
    {
      id: 1,
      message: 'Mensagem 1',
    },
    {
      id: 2,
      message: 'Mensagem 2',
    },
  ];

  findAll() {
    return this.messages;
  }

  findById(id: number) {
    return this.messages.find((message) => message.id === id);
  }

  create(message: Message) {
    this.messages.push(message);
  }
}
