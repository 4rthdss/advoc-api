import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { Pdf } from './entities/pdf.entity';

@Controller('pdf')
export class PdfController {
  @Inject(PdfService)
  private readonly pdfService: PdfService;
  pdfs: Pdf[] = [];

  @Post()
  create(@Body() pdf: CreatePdfDto) {
    this.pdfs.push(pdf);
    return this.pdfService.savePdf(pdf);
  }

  @Get()
  read(): Pdf[] {
    return this.pdfs;
  }
}
