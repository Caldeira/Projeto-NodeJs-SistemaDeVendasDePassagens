import { Viagem } from "../models/ViagemEntity";
import { EntityRepository, Repository } from "typeorm";
import { IViagemRepository } from "../@types/repositories/IViagemRepository";

@EntityRepository(Viagem)
export class ViagemRepository
  extends Repository<Viagem>
  implements IViagemRepository
{
  public async findByCodigoViagem(
    codigoViagem: string
  ): Promise<Viagem | undefined> {
    const viagem = await this.findOne({
      where: {
        codigoViagem,
      },
    });
    return viagem;
  }

  public createViagem(
    codigoViagem: string,
    origem: string,
    destino: string,
    dataHora: Date
  ): Viagem {
    const viagem = this.create({
      codigoViagem,
      origem,
      destino,
      dataHora,
    });
    return viagem;
  }
}
