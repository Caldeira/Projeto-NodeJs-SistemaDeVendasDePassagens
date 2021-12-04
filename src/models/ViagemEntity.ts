import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Timestamp,
} from "typeorm";

@Entity("viagens")
export class Viagem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  origem: string;

  @Column()
  destino: string;

  @Column()
  data: Date;

  @Column()
  hora: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
