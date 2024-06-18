import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Pdf {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'uuid' })
  public clientId: string;

  @Column({ type: 'text' })
  public pdfFile: string;

  @Column({ type: 'varchar', length: 120 })
  public pdfName: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  public createdAt: Date;
}
