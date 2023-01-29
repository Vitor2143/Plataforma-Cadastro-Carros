import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarroDTO } from './carros.dto';
import { CarrosService } from './carros.service';

@Controller('/')
export class CarrosController {
  constructor(private readonly carrosService: CarrosService) {}
  //Comando Registra um carro
  @Post('/cadastrar')
  async create(@Body() data: CarroDTO) {
    return this.carrosService.create(data);
  }
  //Comando recebe TODOS os carros
  @Get('/lista')
  async findAll() {
    return this.carrosService.findAll();
  }
  //Comando Recebe um carro específico
  @Post('/pesquisa')
  async findOne(@Body() data: CarroDTO) {
    return this.carrosService.findOne(data);
  }
  //Comando Atualiza carro
  @Put('atualizar/:id')
  async update(@Param('id') id: string, @Body() data: CarroDTO) {
    return this.carrosService.update(id, data);
  }
  //Comando Deleta um carro
  @Delete('deletar/:id')
  async delete(@Param('id') id: string) {
    return this.carrosService.delete(id);
  }
}
