import { Router } from 'express'
import {
  CreateController,
  ListUsersController,
  FindOneController,
  UpdateController
} from '../controllers/user/index'

const router = Router()
const createController = new CreateController()
const list = new ListUsersController()
const findOne = new FindOneController()
const update = new UpdateController()

router.get('/', list.execute)
router.get('/:id', findOne.execute)
router.post('/', createController.execute)
router.put('/:id', update.execute)

export default router
