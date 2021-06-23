import { Request, Response } from 'express'
import FindUserService from '../../services/user/find-one'
import CreateOfferService from '../../services/credit-aproval/create-offer'
import UserRepository from '../../repositories/user-repository'
import { badRequest } from '../../utils/http-helpers'
import { InvalidParamError } from '../../utils/errors'

export class CreateOfferController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params

    const userRepository = new UserRepository()
    const findUserService = new FindUserService(userRepository)
    const user = await findUserService.execute(id)

    if (!user.body) {
      const { statusCode, body } = badRequest(new InvalidParamError('id'))
      return response.status(statusCode).json(body)
    }

    const createOfferService = new CreateOfferService()
    const { statusCode, body } = await createOfferService.execute(user.body)
    return response.status(statusCode).json(body)
  }
}
