import { Injectable } from '@nestjs/common';
import { Message } from './Message';
import { MessageDTO } from './MessageDTO';

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
    /**
     * O Error() retorna um erro genérico 500, mas no controller está especificado como
     * NotFound que retorna um erro 404.
     */
  }

  create(message: MessageDTO) {
    const id = this.messages.length + 1;
    const data = {
      id,
      ...message, // ... pega as propriedades do objeto message, ou seja text: "Alguma coisa"
    };
    this.messages.push(data);
    return data;
  }

  update(id: number, message: MessageDTO) {
    const index = this.messages.findIndex((message) => message.id === id);
    const data = {
      id,
      ...message,
    };
    this.messages[index] = data;
    return this.messages[index];
  }

  delete(id: number) {
    const index = this.messages.findIndex((message) => message.id === id);
    delete this.messages[index]; // o metodo 'delete' deixa a posição do elemento deletado como null;
    return 'Excluido com sucesso';
  }
}
