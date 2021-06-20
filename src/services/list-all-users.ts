import IShowUser from '../use-cases/user/ishow-user'
import IUserRepository from '../repositories/models/iuser-repository'

export default class ListUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  public async execute(): Promise<IShowUser[]> {
    const allUsers = await this.userRepository.findAllUsers()
    return allUsers
  }
}
