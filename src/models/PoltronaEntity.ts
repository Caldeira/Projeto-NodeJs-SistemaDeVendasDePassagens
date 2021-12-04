import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("poltronas")
export class Poltrona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero_poltrona: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
