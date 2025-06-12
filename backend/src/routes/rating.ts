import { Router } from 'express'
import { errorHandler } from '../error-hander'
import { allRating } from '../controllers/rating'

const ratingRoutes: Router = Router()

ratingRoutes.get('/:userId',errorHandler(allRating))

export default ratingRoutes
