import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar', length: 120 })
  public name: string;

  @Column({ type: 'varchar', length: 120 })
  public email: string;

  @Column({ type: 'varchar', length: 120 })
  public birthday: string;

  @Column({ type: 'varchar', length: 12 })
  public cpf: string;

  @Column({ type: 'varchar', length: 120 })
  public road: string;

  @Column({ type: 'varchar', length: 120 })
  public neighborhood: string;

  @Column({ type: 'varchar', length: 120 })
  public city: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  public createdAt: Date;
}
