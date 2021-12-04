import { FuncionarioDTO } from "../dto/FuncionarioDto";
import { Funcionario } from "../../models/FuncionarioEntity";

export interface IFuncionarioService {
  listar(): Promise<Funcionario[]>;
  buscar(id: number): Promise<Funcionario>;
  criar(funcionarioDto: FuncionarioDTO): Promise<Funcionario>;
  atualizar(id: number, funcionarioDto: FuncionarioDTO): Promise<void>;
  remover(id: number): Promise<void>;
}
