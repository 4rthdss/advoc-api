import { Module } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { PdfController } from './pdf.controller';
import { Pdf } from './entities/pdf.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pdf])],
  controllers: [PdfController],
  providers: [PdfService],
})
export class PdfModule {}
