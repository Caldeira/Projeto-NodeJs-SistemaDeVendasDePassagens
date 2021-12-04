import { CompanhiaDTO } from "../dto/CompanhiaDto";
import { Companhia } from "../../models/CompanhiaEntity";

export interface ICompanhiaRepository {
  find(): Promise<Companhia[]>;
  findOne(id: number): Promise<Companhia>;
  save(companhiaDto: CompanhiaDTO): Promise<Companhia>;
  remove(entities: Companhia | Companhia[]): Promise<Companhia[]>;
  findByCNPJ(cnpj: string): Promise<Companhia | undefined>;
  createCompanhia(nome: string, CNPJ: string): Companhia;
}
