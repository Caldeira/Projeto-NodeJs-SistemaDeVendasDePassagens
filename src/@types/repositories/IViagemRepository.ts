import { ViagemDTO } from "../dto/ViagemDto";
import { Viagem } from "../../models/ViagemEntity";

export interface IViagemRepository {
  find(): Promise<Viagem[]>;
  findOne(id: number): Promise<Viagem>;
  save(viagemDto: ViagemDTO): Promise<Viagem>;
  remove(entities: Viagem | Viagem[]): Promise<Viagem[]>;
  findByCodigoViagem(codigoViagem: string): Promise<Viagem | undefined>;
  createViagem(
    codigoViagem: string,
    origem: string,
    destino: string,
    dataHora: Date
  ): Viagem;
}
