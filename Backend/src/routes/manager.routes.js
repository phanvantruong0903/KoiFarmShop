import { getAllUserController } from '../controllers/manager.controllers.js'
import { wrapAsync } from '../utils/handle.js'
import { Router } from 'express'

const managerRouter = Router()

managerRouter.get('/manage-user/get-all', wrapAsync(getAllUserController))

export default managerRouter
