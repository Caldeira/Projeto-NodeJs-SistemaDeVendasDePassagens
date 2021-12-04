import { FuncionarioDTO } from "../dto/FuncionarioDto";
import { Funcionario } from "../../models/FuncionarioEntity";

export interface IFuncionarioRepository {
  find(): Promise<Funcionario[]>;
  findOne(id: number): Promise<Funcionario>;
  save(funcionarioDto: FuncionarioDTO): Promise<Funcionario>;
  remove(entities: Funcionario | Funcionario[]): Promise<Funcionario[]>;
  findByMatricula(cnpj: string): Promise<Funcionario | undefined>;
  createFuncionario(nome: string, matricula: string): Funcionario;
}
