import { Request, Response } from 'express'
import UserRepository from '../../repositories/user-repository'
import CreateUser from '../../services/user/create'
import { InvalidParamError } from '../../utils/errors'
import { badRequest } from '../../utils/http-helpers'

export class CreateController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const requiredFields = [
      'name',
      'email',
      'password',
      'cpf',
      'serasaScore',
      'averageMonthlyIncome',
      'averageMonthlyExpense'
    ]

    for (const field of requiredFields) {
      if (!request.body[field]) {
        const badReq = badRequest(new InvalidParamError(field))
        return response.status(badReq.statusCode).json(badReq.body)
      }
    }

    const userRepository = new UserRepository()
    const createUserService = new CreateUser(userRepository)

    const { statusCode, body } = await createUserService.execute(request.body)
    return response.status(statusCode).json(body)
  }
}
