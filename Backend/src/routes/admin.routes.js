import { Router } from 'express'

const adminRouter = Router()

import { getUser, getOrder, getKois, addKoi, updateKoi, updateStatusKoi } from '../controllers/admin.controllers.js'

adminRouter.get('/getUsers', getUser)
adminRouter.get('/getOrder', getOrder)
adminRouter.get('/getKois', getKois)

adminRouter.post('/addKoi', addKoi)
adminRouter.put('/updateKoi/:KoiID', updateKoi)
adminRouter.put('/disable-enable/:KoiID', updateStatusKoi)

export default adminRouter
