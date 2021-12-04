import { EntityRepository, Repository } from "typeorm";
import { Poltrona } from "../models/PoltronaEntity";
import { IPoltronaRepository } from "../@types/repositories/IPoltronaRepository";

@EntityRepository(Poltrona)
export class PoltronaRepository
  extends Repository<Poltrona>
  implements IPoltronaRepository
{
  public async findByNumeroPoltrona(
    numeroPoltrona: string
  ): Promise<Poltrona | undefined> {
    const poltrona = await this.findOne({
      where: {
        numeroPoltrona,
      },
    });
    return poltrona;
  }

  public createPoltrona(numeroPoltrona: string): Poltrona {
    const poltrona = this.create({
      numeroPoltrona,
    });
    return poltrona;
  }
}
