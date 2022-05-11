import { Injectable } from '@nestjs/common';

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
}
