import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { IPoltronaService } from "../@types/services/IPoltronaService";

@Service("PoltronaController")
export class PoltronaController {
  constructor(
    @Inject("PoltronaService") private poltronaService: IPoltronaService
  ) {}

  async list(request: Request, response: Response) {
    const poltronas = await this.poltronaService.listar();
    response.send(poltronas);
  }

  async get(request: Request, response: Response) {
    const poltrona = await this.poltronaService.buscar(
      Number(request.params.id)
    );
    response.send(poltrona);
  }

  async create(request: Request, response: Response) {
    const poltrona = await this.poltronaService.criar(request.body);
    response.send(poltrona);
  }

  async update(request: Request, response: Response) {
    const poltrona = await this.poltronaService.atualizar(
      Number(request.params.id),
      request.body
    );
    response.send(poltrona);
  }

  async remove(request: Request, response: Response) {
    await this.poltronaService.remover(Number(request.params.id));
    response.send();
  }
}
