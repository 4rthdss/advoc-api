import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @Column({ type: 'varchar', length: 120, unique: true })
  public email: string;

  @Column({ type: 'varchar', length: 120 })
  public oabSerial: string;

  @Column({ type: 'varchar', length: 12 })
  public phone: string;

  @Column({ type: 'varchar', length: 120 })
  public password: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  public createdAt: Date;
}
