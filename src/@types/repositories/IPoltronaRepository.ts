import { PoltronaDTO } from "../dto/PoltronaDto";
import { Poltrona } from "../../models/PoltronaEntity";

export interface IPoltronaRepository {
  find(): Promise<Poltrona[]>;
  findOne(id: number): Promise<Poltrona>;
  save(poltronaDto: PoltronaDTO): Promise<Poltrona>;
  remove(entities: Poltrona | Poltrona[]): Promise<Poltrona[]>;
  findByNumeroPoltrona(numeroPoltrona: string): Promise<Poltrona | undefined>;
  createPoltrona(numeroPoltrona: string): Poltrona;
}
