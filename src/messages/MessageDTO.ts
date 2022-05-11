/**
 * DTO (Data Transfer Object)
 * DTO é um objeto que define como os dados são enviados pela rede, é como se fosse a interface
 * que define as propriedades que os objetos de menssagem deve ter para serem salvos
 * só que nesse caso valida o objeto para ser enviado pela rede.
 * Os DTOs podem ser interface ou classes, no NestJS é melhor usar classe para que seja possivel
 * utilizar os decorators de validação para validar se o dado está do tipo que a gente deseja.
 */

import { IsString, IsNotEmpty } from 'class-validator'; // classe que possui os decorators de validação

export class MessageDTO {
  @IsString() // confere se o dado é uma string
  @IsNotEmpty() // confere se o dado não está vazio
  text: string;
}
