import { createNewKoiController, getAllUserController } from '../controllers/manager.controllers.js'
import { getProfileController } from '../controllers/users.controllers.js'
import { wrapAsync } from '../utils/handle.js'
import { Router } from 'express'

const managerRouter = Router()

/**
 * lấy tất cả user
 * path: '/manage-user/get-all'
 * method: get
 */
managerRouter.get('/manage-user/get-all', wrapAsync(getAllUserController))

/*
des: get profile của user khác bằng unsername
path: '/:username'
method: get
không cần header vì, chưa đăng nhập cũng có thể xem
*/
managerRouter.get('/manage-user/:username', wrapAsync(getProfileController))

/**
 *
 */
managerRouter.post('/manage-koi/create-new-koi', wrapAsync(createNewKoiController))

export default managerRouter
