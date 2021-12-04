import { Inject, Service } from "typedi";
import { CompanhiaDTO } from "../@types/dto/CompanhiaDto";
import { ICompanhiaService } from "../@types/services/ICompanhiaService";
import { ICompanhiaRepository } from "../@types/repositories/ICompanhiaRepository";
import { Companhia } from "../models/CompanhiaEntity";

@Service("CompanhiaService")
export class CompanhiaService implements ICompanhiaService {
  constructor(
    @Inject("CompanhiaRepository")
    private companhiaRepository: ICompanhiaRepository
  ) {}

  async listar() {
    return this.companhiaRepository.find();
  }

  async buscar(id: number) {
    return this.companhiaRepository.findOne(id);
  }

  async criar(companhiaDto: CompanhiaDTO): Promise<Companhia> {
    const cnpjExists = await this.companhiaRepository.findByCNPJ(
      companhiaDto.CNPJ
    );

    if (cnpjExists) {
      throw new Error("CNPJ já está cadastrado");
    }
    const companhia = this.companhiaRepository.createCompanhia(
      companhiaDto.nome,
      companhiaDto.CNPJ
    );
    return await this.companhiaRepository.save(companhia);
  }

  async atualizar(id: number, companhiaDto: CompanhiaDTO) {
    await this.companhiaRepository.save({ ...companhiaDto, id });
  }

  async remover(id: number) {
    const companhiaToRemove = await this.companhiaRepository.findOne(id);
    if (!companhiaToRemove) {
      throw new Error("Companhia não encontrada no banco de dados!");
    }

    await this.companhiaRepository.remove(companhiaToRemove);
  }
}
