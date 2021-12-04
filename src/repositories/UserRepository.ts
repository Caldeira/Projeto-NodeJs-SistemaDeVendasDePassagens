import { User } from "../models/UserEntity";
import { EntityRepository, Repository } from "typeorm";
import { IUserRepository } from "../@types/repositories/IUserRepository";

@EntityRepository(User)
export class UserRepository
  extends Repository<User>
  implements IUserRepository
{
  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        email,
      },
    });
    return user;
  }

  public createUser(
    name: string,
    email: string,
    password: string,
    admin?: boolean,
    employee?: boolean
  ): User {
    const user = this.create({
      name,
      email,
      password,
      admin,
      employee,
    });
    return user;
  }
}
