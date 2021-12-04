import { getCustomRepository } from "typeorm";
import Container from "typedi";
import { UserRepository } from "../../repositories/UserRepository";
import { CompanhiaRepository } from "../../repositories/CompanhiaRepository";
import { FuncionarioRepository } from "../../repositories/FuncionarioRepository";

// inicializador de dependências:
// inicializa controllers
import "../../controllers/UserController";
import "../../controllers/CompanhiaController";
import "../../controllers/FuncionarioController";

// inicializa services
import "../../services/UserService";
import "../../services/CompanhiaService";
import "../../services/FuncionarioService";

const createDependencyInjector = () => {
  Container.set("UserRepository", getCustomRepository(UserRepository));
  Container.set(
    "CompanhiaRepository",
    getCustomRepository(CompanhiaRepository)
  );
  Container.set(
    "FuncionarioRepository",
    getCustomRepository(FuncionarioRepository)
  );
};

export default createDependencyInjector;
