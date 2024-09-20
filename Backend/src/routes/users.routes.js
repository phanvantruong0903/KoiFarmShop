import { Router } from 'express'
import {
  accessTokenValidator,
  changePasswordValidator,
  emailVerifyTokenValidator,
  forgotPasswordValidator,
  loginValidator,
  refreshTokenValidator,
  registerValidator,
  resetPasswordValidator,
  updateMeValidator,
  verifiedUserValidator,
  verifyForgotPasswordTokenValidator
} from '../middlewares/users.middlewares.js'
import {
  changePasswordController,
  emailVerifyTokenController,
  forgotPasswordController,
  getMeController,
  getProfileController,
  loginController,
  logoutController,
  oAuthController,
  refreshController,
  registerController,
  resendEmailVerifyController,
  resetPasswordController,
  updateMeController,
  verifyForgotPasswordTokenController
} from '../controllers/users.controllers.js'
import { wrapAsync } from '../utils/handle.js'
import { filterMiddleware } from '../middlewares/common.middlewares.js'

const usersRouter = Router()

usersRouter.post('/register', registerValidator, wrapAsync(registerController))

export default usersRouter
