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

  @Column({ unique: true })
  numeroPoltrona: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
