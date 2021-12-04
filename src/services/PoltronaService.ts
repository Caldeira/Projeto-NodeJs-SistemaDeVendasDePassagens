import { Inject, Service } from "typedi";
import { PoltronaDTO } from "../@types/dto/PoltronaDto";
import { IPoltronaService } from "../@types/services/IPoltronaService";
import { IPoltronaRepository } from "../@types/repositories/IPoltronaRepository";
import { Poltrona } from "../models/PoltronaEntity";

@Service("PoltronaService")
export class PoltronaService implements IPoltronaService {
  constructor(
    @Inject("PoltronaRepository")
    private poltronaRepository: IPoltronaRepository
  ) {}

  async listar() {
    return this.poltronaRepository.find();
  }

  async buscar(id: number) {
    return this.poltronaRepository.findOne(id);
  }

  async criar(poltronaDto: PoltronaDTO): Promise<Poltrona> {
    const poltronaExists = await this.poltronaRepository.findByNumeroPoltrona(
      poltronaDto.numeroPoltrona
    );

    if (poltronaExists) {
      throw new Error("Numero de poltrona já está cadastrado");
    }
    const poltrona = this.poltronaRepository.createPoltrona(
      poltronaDto.numeroPoltrona
    );
    return await this.poltronaRepository.save(poltrona);
  }

  async atualizar(id: number, poltronaDto: PoltronaDTO) {
    await this.poltronaRepository.save({ ...poltronaDto, id });
  }

  async remover(id: number) {
    const poltronaToRemove = await this.poltronaRepository.findOne(id);
    if (!poltronaToRemove) {
      throw new Error("Poltrona não encontrada no banco de dados!");
    }

    await this.poltronaRepository.remove(poltronaToRemove);
  }
}
