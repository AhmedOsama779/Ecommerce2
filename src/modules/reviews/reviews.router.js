import { Router } from 'express'
import * as controllers from './reviews.controller.js'
import { asyncHandler } from '../../utils/errorHandling.js'
// import { auth } from 'google-auth-library'
import auth from '../../middleware/auth.js'
const router = Router()

// router.get('/', (req ,res)=>{
//     res.status(200).json({message:"reviews Module"})
// })

router.post('/:productId', auth(), asyncHandler(controllers.addReview))

export default router
