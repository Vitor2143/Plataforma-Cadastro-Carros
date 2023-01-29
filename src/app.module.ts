import { Module } from '@nestjs/common';
import { PrismaService } from './database/PrismaService';
import { CarrosController } from './modules/carros/carros.controller';
import { CarrosModule } from './modules/carros/carros.module';
import { CarrosService } from './modules/carros/carros.service';

@Module({
  imports: [CarrosModule],
  controllers: [CarrosController],
  providers: [CarrosService, PrismaService],
})
export class AppModule {}
