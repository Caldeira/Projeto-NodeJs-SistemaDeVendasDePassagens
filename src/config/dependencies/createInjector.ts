import { getCustomRepository } from "typeorm";
import Container from "typedi";
import { UserRepository } from "../../repositories/UserRepository";
import { CompanhiaRepository } from "../../repositories/CompanhiaRepository";
import { FuncionarioRepository } from "../../repositories/FuncionarioRepository";
import { ViagemRepository } from "../../repositories/ViagemRepository";

// inicializador de dependências:
// inicializa controllers
import "../../controllers/UserController";
import "../../controllers/CompanhiaController";
import "../../controllers/FuncionarioController";
import "../../controllers/ViagemController";

// inicializa services
import "../../services/UserService";
import "../../services/CompanhiaService";
import "../../services/FuncionarioService";
import "../../services/ViagemService";

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
  Container.set("ViagemRepository", getCustomRepository(ViagemRepository));
};

export default createDependencyInjector;
