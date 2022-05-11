import { Injectable } from '@nestjs/common';
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
    return this.messages.filter(Boolean); // O filtro boolean tira todas as posições nulas do array
  }

  // metodo assincrono para ser possivel usar o .catch() no controller
  async findById(id: number) {
    const message = this.messages.find((msg) => msg?.id === id); // operador ? checa se o elemento é null, se for, ele não avança
    if (!message) {
      throw Error(`Menssagem com ID '${id}' não encontrada!`);
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

  async update(id: number, message: MessageDTO) {
    const index = this.messages.findIndex((msg) => msg?.id === id);

    if (index < 0) {
      throw Error(`A messagem com o ID '${id}' não foi encontrada!`);
    }

    const data = {
      id,
      ...message,
    };
    this.messages[index] = data;
    return this.messages[index];
  }

  async delete(id: number) {
    const index = this.messages.findIndex((msg) => msg?.id === id);

    if (index < 0) {
      throw Error(`A messagem com o ID '${id}' não foi encontrada!`);
    }

    delete this.messages[index]; // o metodo 'delete' deixa a posição do elemento deletado como null;
    return 'Excluido com sucesso';
  }
}
