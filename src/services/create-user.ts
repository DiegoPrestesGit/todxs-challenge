import { badRequest, ok } from '../utils/http-helpers'
import ICreateUser from '../use-cases/user/icreate-user'
import IShowUser from '../use-cases/user/ishow-user'
import IUserRepository from '../repositories/models/iuser-repository'
import { InvalidParamError } from '../utils/errors'
import HttpResponse from '../utils/http'

export default class ListUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  public async execute(userData: ICreateUser): Promise<HttpResponse> {
    const { email, cpf } = userData
    const checkUserEmail = await this.userRepository.findByEmail(email)
    if (checkUserEmail) return badRequest(new InvalidParamError('email'))

    const checkUserCpf = await this.userRepository.findByCpf(cpf)
    if (checkUserCpf) return badRequest(new InvalidParamError('cpf'))

    const newUser: IShowUser = await this.userRepository.create(userData)
    return ok(newUser)
  }
}
