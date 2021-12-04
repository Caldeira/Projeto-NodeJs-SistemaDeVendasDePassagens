import { CompanhiaDTO } from "../dto/CompanhiaDto";
import { Companhia } from "../../models/CompanhiaEntity";

export interface ICompanhiaService {
  listar(): Promise<Companhia[]>;
  buscar(id: number): Promise<Companhia>;
  criar(companhiaDto: CompanhiaDTO): Promise<Companhia>;
  atualizar(id: number, companhiaDto: CompanhiaDTO): Promise<void>;
  remover(id: number): Promise<void>;
}
