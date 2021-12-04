import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("viagens")
export class Viagem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  codigoViagem: string;

  @Column()
  origem: string;

  @Column()
  destino: string;

  @Column()
  dataHora: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
