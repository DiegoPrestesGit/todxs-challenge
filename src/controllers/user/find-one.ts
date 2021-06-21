import { Request, Response } from 'express'
import UserRepository from '../../repositories/user-repository'
import FindOneService from '../../services/user/find-one'

export class FindOneController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params
    const userRepository = new UserRepository()
    const userListService = new FindOneService(userRepository)
    const { statusCode, body } = await userListService.execute(id)
    return response.status(statusCode).json(body)
  }
}
