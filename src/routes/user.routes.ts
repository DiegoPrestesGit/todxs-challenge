import { Router } from 'express'
import {
  CreateController,
  ListUsersController,
  FindOneController
} from '../controllers/user/index'

const userRouter = Router()
const createUserController = new CreateController()
const listUsers = new ListUsersController()
const findOne = new FindOneController()

userRouter.get('/', listUsers.execute)
userRouter.get('/:id', findOne.execute)
userRouter.post('/', createUserController.execute)

export default userRouter
