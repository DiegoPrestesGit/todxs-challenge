import IUserRepository from '../../repositories/models/iuser-repository'
import { ok } from '../../utils/http-helpers'
import HttpResponse from '../../utils/http'
import IShowUser from '../../use-cases/user/ishow-user'

export default class FindOneService {
  constructor(private readonly userRepository: IUserRepository) {}

  public async execute(id: string): Promise<HttpResponse> {
    const user: IShowUser | undefined = await this.userRepository.findById(id)
    return ok(user)
  }
}
