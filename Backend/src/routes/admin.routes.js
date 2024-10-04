import { Router } from 'express'

const adminRouter = Router()

import { getUser } from '../controllers/admin.controllers.js'
import { getOrder } from '../controllers/admin.controllers.js'
import { getKois } from '../controllers/admin.controllers.js'

adminRouter.get('/getUsers', getUser)
adminRouter.get('/getOrder', getOrder )
adminRouter.get('/getKois', getKois )

export default adminRouter