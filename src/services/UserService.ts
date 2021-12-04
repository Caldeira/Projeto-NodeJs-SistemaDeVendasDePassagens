import { Inject, Service } from "typedi";
import { UserDTO } from "../@types/dto/UserDto";
import { IUserService } from "../@types/services/IUserService";
import { IUserRepository } from "../@types/repositories/IUserRepository";
import { hash } from "bcrypt";
import { User } from "../models/UserEntity";

@Service("UserService")
export class UserService implements IUserService {
  constructor(
    @Inject("UserRepository") private userRepository: IUserRepository
  ) {}

  async listar() {
    return this.userRepository.find();
  }

  async buscar(id: number) {
    return this.userRepository.findOne(id);
  }

  async criar(userDto: UserDTO): Promise<User> {
    const emailExists = await this.userRepository.findByEmail(userDto.email);

    if (emailExists) {
      throw new Error("Email address already used");
    }
    const hashedPassword = await hash(userDto.password, 8);
    const user = this.userRepository.createUser(
      userDto.name,
      userDto.email,
      (userDto.password = hashedPassword)
    );
    return this.userRepository.save(user);
  }

  async atualizar(id: number, userDto: UserDTO) {
    await this.userRepository.save({ ...userDto, id });
  }

  async remover(id: number) {
    const userToRemove = await this.userRepository.findOne(id);
    if (!userToRemove) {
      throw new Error("User not found!");
    }

    await this.userRepository.remove(userToRemove);
  }
}
