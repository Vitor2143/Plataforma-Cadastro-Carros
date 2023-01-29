import { Module } from '@nestjs/common';
import { CarrosService } from './carros.service';
import { CarrosController } from './carros.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [CarrosController],
  providers: [CarrosService, PrismaService],
})
export class CarrosModule {}
