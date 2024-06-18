import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pdf } from './entities/pdf.entity';
import { Repository } from 'typeorm';
import { CreatePdfDto } from './dto/create-pdf.dto';

@Injectable()
export class PdfService {
  @InjectRepository(Pdf)
  private readonly repository: Repository<Pdf>;

  async savePdf(pdf: CreatePdfDto): Promise<Pdf> {
    return this.repository.create(pdf);
  }

  async getPdfs(): Promise<Pdf[]> {
    return this.repository.find();
  }
}
