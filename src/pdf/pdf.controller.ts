import { Body, Controller, Get, Post } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { Pdf } from './entities/pdf.entity';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Post()
  async create(@Body() pdf: CreatePdfDto) {
    return this.pdfService.savePdf(pdf);
  }

  @Get()
  async read(): Promise<Pdf[]> {
    return this.pdfService.getPdfs();
  }
}
