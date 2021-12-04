import { EntityRepository, Repository } from "typeorm";
import { Companhia } from "../models/CompanhiaEntity";
import { ICompanhiaRepository } from "../@types/repositories/ICompanhiaRepository";

@EntityRepository(Companhia)
export class CompanhiaRepository
  extends Repository<Companhia>
  implements ICompanhiaRepository
{
  public async findByCNPJ(CNPJ: string): Promise<Companhia | undefined> {
    const companhia = await this.findOne({
      where: {
        CNPJ,
      },
    });
    return companhia;
  }

  public createCompanhia(nome: string, CNPJ: string): Companhia {
    const companhia = this.create({
      nome,
      CNPJ,
    });
    return companhia;
  }
}
