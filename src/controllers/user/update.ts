import { Request, Response } from 'express'
import UserRepository from '../../repositories/user-repository'
import UpdateService from '../../services/user/update'
import { MissingParamError } from '../../utils/errors'
import { badRequest } from '../../utils/http-helpers'

export class UpdateController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params
    const { password } = request.body
    if (!id) {
      const { statusCode, body } = badRequest(new MissingParamError('id'))
      return response.status(statusCode).json(body)
    }

    if (!password) {
      const { statusCode, body } = badRequest(new MissingParamError('password'))
      return response.status(statusCode).json(body)
    }

    const userRepository = new UserRepository()
    const createUserService = new UpdateService(userRepository)

    const { statusCode, body } = await createUserService.execute(
      id,
      request.body
    )
    return response.status(statusCode).json(body)
  }
}
