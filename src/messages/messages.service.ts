import { Injectable } from '@nestjs/common';
import { Message } from './Message';

@Injectable()
export class MessagesService {
  private messages = [
    {
      id: 1,
      text: 'Mensagem 1',
    },
    {
      id: 2,
      text: 'Mensagem 2',
    },
  ];

  findAll() {
    return this.messages;
  }

  // metodo assincrono para ser possivel usar o .catch() no controller
  async findById(id: number) {
    const message = this.messages.find((message) => message.id === id);
    if (!message) {
      throw Error(`Menssagem com ID '${id}' não encontrada.`);
    }
    return message;
  }

  create(message: Message) {
    this.messages.push(message);
  }

  update(id: number, message: Message) {
    const index = this.messages.findIndex((message) => message.id === id);
    this.messages[index].text = message.text;
    return this.messages[index];
  }

  delete(id: number) {
    const index = this.messages.findIndex((message) => message.id === id);
    delete this.messages[index]; // o metodo 'delete' deixa a posição do elemento deletado como null;
    return 'Excluido com sucesso';
  }
}
