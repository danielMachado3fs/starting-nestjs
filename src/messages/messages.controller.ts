import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './Message';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {} //disponibiliza o service para ser utilizado

  // todas as palavras começadas com @ são DECORATOS (decoradores), eles servem para pegar automáticamente
  // as propriedades do objeto de requisição

  @Get() //localhost/starting-with-nest/messages
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id') // @Get é um decorator que pega a rota da aplicação, e o que é passado como parâmetro é os parâmetros que a rota vai receber
  // nesse caso por exemplo localhost/starting-with-nest/messages/1
  // o número 1 é um id passado como paramtro para o findById()
  findById(@Param() params) {
    // @Params é um decorator que pega os parametros passados na rota
    // (propriedade params do objeto de requisição)

    return this.messagesService.findById(+params.id); // por padrão o parametro passado na rota vem como string
    // o sinal de + é para transformar ele em number, ja que la no service o método está recebendo
    // um parametro number e compara com o id da mensagem com ===, quer dizer que está comparando tambem o tipo
  }

  @Post()
  create(@Body() body: Message) {
    // @Body é o decorator que referencia o corpo da mensagem passada pelo post
    // o tipo do body é Message, esse tipo é definido na interface Message
    return this.messagesService.create(body);
  }
}
