import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { CarroDTO } from './carros.dto';

@Injectable()
export class CarrosService {
  constructor(private prisma: PrismaService) {}
  //Registrar Um Carro
  async create(data: CarroDTO) {
    const carroExists = await this.prisma.carros.findFirst({
      where: {
        codigoConcess: data.codigoConcess,
        nomeCarro: data.nomeCarro,
      },
    });

    if (carroExists) {
      console.log('Erro');
      throw new Error('Carro já cadastrado nessa concessionária');
    }

    const carro = await this.prisma.carros.create({
      data,
    });
    return carro;
  }
  //Receber TODOS os Carros
  async findAll() {
    return this.prisma.carros.findMany();
  }

  //Receber os carros de uma concessionária
  async findOne(data: CarroDTO) {
    const findCars = await this.prisma.carros.findMany({
      where: {
        codigoConcess: data.codigoConcess,
      },
    });
    if (!findCars) {
      throw new Error('Carro ou Concessionária não existe');
    }
    if (Object.keys(data).length === 0) {
      throw new Error('É necessário passar um dado para a consulta');
    }
    return findCars;
  }

  //Atualizar Carros
  async update(id: string, data: CarroDTO) {
    const idInt = parseInt(id);
    const carroExists = await this.prisma.carros.findUnique({
      where: {
        id: idInt,
      },
    });
    if (!carroExists) {
      throw new Error('Carro não encontrado');
    }

    await this.prisma.carros.update({
      data,
      where: {
        id: idInt,
      },
    });
  }

  //Deletar Carros
  async delete(id: string) {
    const idInt = parseInt(id);
    const carroExists = await this.prisma.carros.findUnique({
      where: {
        id: idInt,
      },
    });

    if (!carroExists) {
      throw new Error('Carro não encontrado');
    }

    return await this.prisma.carros.delete({
      where: {
        id: idInt,
      },
    });
  }
}
