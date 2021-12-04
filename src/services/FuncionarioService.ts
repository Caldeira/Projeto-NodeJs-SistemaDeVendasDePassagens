import { Inject, Service } from "typedi";
import { FuncionarioDTO } from "../@types/dto/FuncionarioDto";
import { IFuncionarioService } from "../@types/services/IFuncionarioService";
import { IFuncionarioRepository } from "../@types/repositories/IFuncionarioRepository";
import { Funcionario } from "../models/FuncionarioEntity";

@Service("FuncionarioService")
export class FuncionarioService implements IFuncionarioService {
  constructor(
    @Inject("FuncionarioRepository")
    private funcionarioRepository: IFuncionarioRepository
  ) {}

  async listar() {
    return this.funcionarioRepository.find();
  }

  async buscar(id: number) {
    return this.funcionarioRepository.findOne(id);
  }

  async criar(funcionarioDto: FuncionarioDTO): Promise<Funcionario> {
    const matriculaExists = await this.funcionarioRepository.findByMatricula(
      funcionarioDto.matricula
    );

    if (matriculaExists) {
      throw new Error("Matrícula já está cadastrada no sistema");
    }
    const funcionario = this.funcionarioRepository.createFuncionario(
      funcionarioDto.nome,
      funcionarioDto.matricula
    );
    return await this.funcionarioRepository.save(funcionario);
  }

  async atualizar(id: number, funcionarioDto: FuncionarioDTO) {
    await this.funcionarioRepository.save({ ...funcionarioDto, id });
  }

  async remover(id: number) {
    const funcionarioToRemove = await this.funcionarioRepository.findOne(id);
    if (!funcionarioToRemove) {
      throw new Error("Funcionário não encontrado no banco de dados!");
    }

    await this.funcionarioRepository.remove(funcionarioToRemove);
  }
}
