import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { ICompanhiaService } from "../@types/services/ICompanhiaService";

@Service("CompanhiaController")
export class CompanhiaController {
  constructor(
    @Inject("CompanhiaService") private companhiaService: ICompanhiaService
  ) {}

  async list(request: Request, response: Response) {
    const companhias = await this.companhiaService.listar();
    response.send(companhias);
  }

  async get(request: Request, response: Response) {
    const companhia = await this.companhiaService.buscar(
      Number(request.params.id)
    );
    response.send(companhia);
  }

  async create(request: Request, response: Response) {
    const companhia = await this.companhiaService.criar(request.body);
    response.send(companhia);
  }

  async update(request: Request, response: Response) {
    const companhia = await this.companhiaService.atualizar(
      Number(request.params.id),
      request.body
    );
    response.send(companhia);
  }

  async remove(request: Request, response: Response) {
    await this.companhiaService.remover(Number(request.params.id));
    response.send();
  }
}
