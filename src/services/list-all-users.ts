import ShowUser from '../models/user/use-cases/show-user'
import IUserRepository from '../repositories/models/iuser-repository'

export default class ListUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  public async execute(): Promise<ShowUser[]> {
    const allUsers = await this.userRepository.findAllUsers()
    return allUsers
  }
}
