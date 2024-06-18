import { Pdf } from '../entities/pdf.entity';

export class CreatePdfDto implements Pdf {
  public clientId: string;
  public createdAt: Date;
  public id: string;
  public pdfFile: string;
  public pdfName: string;
}
