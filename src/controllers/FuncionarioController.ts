import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { IFuncionarioService } from "../@types/services/IFuncionarioService";

@Service("FuncionarioController")
export class FuncionarioController {
  constructor(
    @Inject("FuncionarioService")
    private funcionarioService: IFuncionarioService
  ) {}

  async list(request: Request, response: Response) {
    const funcionarios = await this.funcionarioService.listar();
    response.send(funcionarios);
  }

  async get(request: Request, response: Response) {
    const funcionario = await this.funcionarioService.buscar(
      Number(request.params.id)
    );
    response.send(funcionario);
  }

  async create(request: Request, response: Response) {
    const funcionario = await this.funcionarioService.criar(request.body);
    response.send(funcionario);
  }

  async update(request: Request, response: Response) {
    const funcionario = await this.funcionarioService.atualizar(
      Number(request.params.id),
      request.body
    );
    response.send(funcionario);
  }

  async remove(request: Request, response: Response) {
    await this.funcionarioService.remover(Number(request.params.id));
    response.send();
  }
}
