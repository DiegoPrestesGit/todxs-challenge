import { Router } from 'express'
import userRouter from './user.routes'
import creditAprovalRouter from './credit-aproval.routes'

const routes = Router()
routes.use('/user', userRouter)
routes.use('/offer', creditAprovalRouter)

export default routes
