import { Router } from 'express'

const adminRouter = Router()

import {
  getUser,
  getOrder,
  getKois,
  addKoi,
  updateKoi,
  updateStatusKoi,
  updateUser,
  updateStatusUser,
  createCategory
} from '../controllers/admin.controllers.js'
import { accessTokenValidator } from '../middlewares/users.middlewares.js'
import { isAdminValidator } from '../middlewares/manager.middlewares.js'

adminRouter.get('/getUsers', accessTokenValidator, isAdminValidator, getUser)
adminRouter.get('/getOrder', accessTokenValidator, isAdminValidator, getOrder)
adminRouter.get('/getKois', accessTokenValidator, isAdminValidator, getKois)

adminRouter.post('/addKoi', accessTokenValidator, isAdminValidator, addKoi)
adminRouter.put('/updateKoi/:KoiID', accessTokenValidator, isAdminValidator, updateKoi)
adminRouter.put('/disable-enable/:KoiID', accessTokenValidator, accessTokenValidator, updateStatusKoi)
adminRouter.post('/createCategory', accessTokenValidator, accessTokenValidator, createCategory)

adminRouter.put('/updateUser/:UserID', accessTokenValidator, isAdminValidator, updateUser)
adminRouter.put('/disable-enable-User/:UserID', accessTokenValidator, isAdminValidator, updateStatusUser)

export default adminRouter
