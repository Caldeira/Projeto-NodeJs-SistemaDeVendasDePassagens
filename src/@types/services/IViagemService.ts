import { ViagemDTO } from "../dto/ViagemDto";
import { Viagem } from "../../models/ViagemEntity";

export interface IViagemService {
  listar(): Promise<Viagem[]>;
  buscar(id: number): Promise<Viagem>;
  criar(viagemDto: ViagemDTO): Promise<Viagem>;
  atualizar(id: number, viagemDto: ViagemDTO): Promise<void>;
  remover(id: number): Promise<void>;
}
