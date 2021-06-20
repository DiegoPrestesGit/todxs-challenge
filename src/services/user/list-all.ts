import IUserRepository from '../../repositories/models/iuser-repository'
import { ok } from '../../utils/http-helpers'
import HttpResponse from '../../utils/http'

export default class ListUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  public async execute(): Promise<HttpResponse> {
    const allUsers = await this.userRepository.findAllUsers()
    return ok(allUsers)
  }
}
