import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './Message';
import { MessageDTO } from './MessageDTO';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {} //disponibiliza o service para ser utilizado

  /**
   * Todas as palavras começadas com @ são DECORATOS (decoradores)
   * “Um Decorator é um tipo especial de declaração que pode ser anexada a uma declaração de classe,
   * método, acessador, propriedade ou parâmetro.”
   * Em outras palavras é como de fosse uma função que serve de atalho para fazer alguma coisa com
   * o alvo que ele está sendo aplicado.
   * Explicação detalhada no link https://dev.to/omarkdev/uma-introducao-pratica-a-decorators-no-typescript-3653
   */

  @Get() // localhost/starting-with-nest/messages
  findAll() {
    return this.messagesService.findAll();
  }

  /**
   * @Get é um decorator que faz referencia ao metodo de requisição tipo GET.
   * O que é passado como parâmetro nesse decorator é os parâmetros que a rota vai receber
   * nesse caso por exemplo é uma requisição do tipo GET localhost/starting-with-nest/messages/1
   * o número 1 é um id passado como paramtro para o findById()
   */

  @Get(':id')
  findById(@Param() params) {
    /**
     * @Params é um decorator que pega os parametros passados na rota
     * (propriedade params do objeto de requisição).
     * Por padrão o parametro passado na rota vem como string o sinal de + é para transformar-lo em
     * number, ja que la no service o método está recebendo um parametro number e compara com o
     * id da mensagem com ===, quer dizer que está comparando tambem o tipo
     */

    return this.messagesService.findById(+params.id).catch((e) => {
      throw new NotFoundException(e.message);
    });
    /**
     * O .catch() serve para pegar um erro ocorrido na requisição, só é possivel utilizá-lo em uma
     * Promise, sendo assim o método findByID no service foi colocado como assincrono.
     */
  }

  @Post()
  create(@Body() message: MessageDTO) {
    /**
     * @Body é o decorator que referencia o corpo da mensagem passada pelo post
     * o tipo do body é Message, esse tipo é definido na interface Message
     */
    return this.messagesService.create(message);
  }

  @Put(':id')
  update(@Param() params, @Body() message: MessageDTO) {
    return this.messagesService.update(+params.id, message).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.messagesService.delete(+params.id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
