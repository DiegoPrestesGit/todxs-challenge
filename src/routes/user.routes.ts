import { Router } from 'express'
import {
  CreateController,
  ListUsersController
} from '../controllers/user/index'

const userRouter = Router()
const createUserController = new CreateController()
const listUsers = new ListUsersController()

userRouter.get('/', listUsers.execute)
userRouter.post('/', createUserController.execute)

export default userRouter
