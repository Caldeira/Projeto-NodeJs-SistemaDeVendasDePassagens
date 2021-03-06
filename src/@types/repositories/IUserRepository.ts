import { UserDTO } from "../dto/UserDto";
import { User } from "../../models/UserEntity";

export interface IUserRepository {
  find(): Promise<User[]>;
  findOne(id: number): Promise<User>;
  save(userDto: UserDTO): Promise<User>;
  remove(entities: User | User[]): Promise<User[]>;
  findByEmail(email: string): Promise<User | undefined>;
  createUser(
    name: string,
    email: string,
    password: string,
    admin?: boolean,
    employee?: boolean
  ): User;
}
