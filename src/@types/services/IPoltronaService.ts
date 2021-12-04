import { PoltronaDTO } from "../dto/PoltronaDto";
import { Poltrona } from "../../models/PoltronaEntity";

export interface IPoltronaService {
  listar(): Promise<Poltrona[]>;
  buscar(id: number): Promise<Poltrona>;
  criar(poltronaDto: PoltronaDTO): Promise<Poltrona>;
  atualizar(id: number, poltronaDto: PoltronaDTO): Promise<void>;
  remover(id: number): Promise<void>;
}
