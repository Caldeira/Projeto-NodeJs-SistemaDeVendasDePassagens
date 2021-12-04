import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { IViagemService } from "../@types/services/IViagemService";

@Service("ViagemController")
export class ViagemController {
  constructor(@Inject("ViagemService") private viagemService: IViagemService) {}

  async list(request: Request, response: Response) {
    const viagens = await this.viagemService.listar();
    response.send(viagens);
  }

  async get(request: Request, response: Response) {
    const viagem = await this.viagemService.buscar(Number(request.params.id));
    response.send(viagem);
  }

  async create(request: Request, response: Response) {
    const viagem = await this.viagemService.criar(request.body);
    response.send(viagem);
  }

  async update(request: Request, response: Response) {
    const viagem = await this.viagemService.atualizar(
      Number(request.params.id),
      request.body
    );
    response.send(viagem);
  }

  async remove(request: Request, response: Response) {
    await this.viagemService.remover(Number(request.params.id));
    response.send();
  }
}
