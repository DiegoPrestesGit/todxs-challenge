import { Request, Response } from 'express'
import UserRepository from '../../repositories/user-repository'
import UserListService from '../../services/user/list-all-users'
import CreateUser from '../../services/user/create-user'
import { InvalidParamError } from '../../utils/errors'
import { badRequest } from '../../utils/http-helpers'

export class CreateController {
  public async index(_: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository()
    const userListService = new UserListService(userRepository)
    const allUsers = await userListService.execute()
    return response.json(allUsers)
  }

  public async execute(request: Request, response: Response): Promise<any> {
    const requiredFields = [
      'name',
      'email',
      'password',
      'cpf',
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

    const serviceResponse = await createUserService.execute(request.body)
    return response
      .status(serviceResponse.statusCode)
      .json(serviceResponse.body)
  }
}
