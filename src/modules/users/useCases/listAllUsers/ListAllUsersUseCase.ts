import { AppError } from "../../../../shared/Errors/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const isUser = this.usersRepository.findById(user_id);

    if (!isUser) {
      throw new AppError(`User not found`);
    }

    const isAdmin = isUser.admin;

    if (!isAdmin) {
      throw new AppError(`User does not have admin permission`);
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
