import { Router } from 'express'
import { CreateOfferController } from '../controllers/credit-aproval/create-offer'

const router = Router()
const createOffer = new CreateOfferController()

router.get('/:id', createOffer.execute)

export default router
