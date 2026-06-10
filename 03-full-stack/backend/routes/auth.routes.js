import { Router } from 'express'
import { login, logout, profile, register } from '../controllers/auth.controller.js'
import { authRequired } from '../middlewares/validateToken.js'
import { registerValidator, loginValidator } from '../validators/auth.validator.js'
import { handleValidator } from '../validators/handleValidator.js'

const router = Router()

router.post( '/register', registerValidator, handleValidator, register )
router.post( '/login', loginValidator, handleValidator, login )
router.post( '/logout', logout )
router.get( '/profile', authRequired, profile )

export default router