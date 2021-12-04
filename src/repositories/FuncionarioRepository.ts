import { EntityRepository, Repository } from "typeorm";
import { Funcionario } from "../models/FuncionarioEntity";
import { IFuncionarioRepository } from "../@types/repositories/IFuncionarioRepository";

@EntityRepository(Funcionario)
export class FuncionarioRepository
  extends Repository<Funcionario>
  implements IFuncionarioRepository
{
  public async findByMatricula(
    matricula: string
  ): Promise<Funcionario | undefined> {
    const funcionario = await this.findOne({
      where: {
        matricula,
      },
    });
    return funcionario;
  }

  public createFuncionario(nome: string, matricula: string): Funcionario {
    const funcionario = this.create({
      nome,
      matricula,
    });
    return funcionario;
  }
}
