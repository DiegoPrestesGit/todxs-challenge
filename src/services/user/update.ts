import { badRequest, ok, unauthorized } from '../../utils/http-helpers'
import IUserRepository from '../../repositories/models/iuser-repository'
import { InvalidParamError } from '../../utils/errors'
import HttpResponse from '../../utils/http'
import IUpdateUser from '../../use-cases/user/iupdate-user'

export default class ListUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  public async execute(
    id: string,
    userData: IUpdateUser
  ): Promise<HttpResponse> {
    const {
      email,
      password,
      serasaScore,
      averageMonthlyExpense,
      averageMonthlyIncome
    } = userData

    const user = await this.userRepository.findById(id)
    if (!user) return badRequest(new InvalidParamError('id'))

    if (email) {
      console.log('xesque')
      const checkEmail = await this.userRepository.findByEmail(email)
      if (checkEmail && user.id !== id) {
        return badRequest(new InvalidParamError('email'))
      }
      user.email = email
    }

    if (password !== user.password) return unauthorized()

    if (serasaScore) user.serasaScore = serasaScore
    if (averageMonthlyIncome) user.averageMonthlyIncome = averageMonthlyIncome
    if (averageMonthlyExpense)
      user.averageMonthlyExpense = averageMonthlyExpense

    const updatedUser = await this.userRepository.save(user)
    return ok(updatedUser)
  }
}
