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
      throw new AppError(`User ${user_id} not found`);
    }

    const isAdmin = isUser.admin;

    if (!isAdmin) {
      throw new AppError(`User is not an administrator`);
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
