import { Inject, Service } from "typedi";
import { ViagemDTO } from "../@types/dto/ViagemDto";
import { IViagemService } from "../@types/services/IViagemService";
import { IViagemRepository } from "../@types/repositories/IViagemRepository";
import { Viagem } from "../models/ViagemEntity";

@Service("ViagemService")
export class ViagemService implements IViagemService {
  constructor(
    @Inject("ViagemRepository")
    private viagemRepository: IViagemRepository
  ) {}

  async listar() {
    return this.viagemRepository.find();
  }

  async buscar(id: number) {
    return this.viagemRepository.findOne(id);
  }

  async criar(viagemDto: ViagemDTO): Promise<Viagem> {
    const codigoViagemExists = await this.viagemRepository.findByCodigoViagem(
      viagemDto.codigoViagem
    );
    if (codigoViagemExists)
      throw new Error("Código da viagem já está cadastrado no sistema");

    const viagem = this.viagemRepository.createViagem(
      viagemDto.codigoViagem,
      viagemDto.origem,
      viagemDto.destino,
      viagemDto.dataHora
    );
    return await this.viagemRepository.save(viagem);
  }

  async atualizar(id: number, viagemDto: ViagemDTO) {
    await this.viagemRepository.save({ ...viagemDto, id });
  }

  async remover(id: number) {
    const viagemToRemove = await this.viagemRepository.findOne(id);
    if (!viagemToRemove) {
      throw new Error(
        "Este registro de Viagem não foi encontrado no banco de dados!"
      );
    }

    await this.viagemRepository.remove(viagemToRemove);
  }
}
