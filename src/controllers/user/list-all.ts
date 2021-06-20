import { Request, Response } from 'express'
import UserRepository from '../../repositories/user-repository'
import UserListService from '../../services/user/list-all-users'

export class ListUsersController {
  public async execute(_: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository()
    const userListService = new UserListService(userRepository)
    const allUsers = await userListService.execute()
    return response.json(allUsers)
  }
}
