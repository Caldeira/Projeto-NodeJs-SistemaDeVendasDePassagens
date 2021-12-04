import { getCustomRepository } from "typeorm";
import Container from "typedi";
import { UserRepository } from "../../repositories/UserRepository";
import { CompanhiaRepository } from "../../repositories/CompanhiaRepository";

// inicializador de dependências:
// inicializa controllers
import "../../controllers/UserController";
import "../../controllers/CompanhiaController";

// inicializa services
import "../../services/UserService";
import "../../services/CompanhiaService";

const createDependencyInjector = () => {
  Container.set("UserRepository", getCustomRepository(UserRepository));
  Container.set(
    "CompanhiaRepository",
    getCustomRepository(CompanhiaRepository)
  );
};

export default createDependencyInjector;
