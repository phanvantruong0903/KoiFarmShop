import {
  createNewKoiController,
  createNewSupplierController,
  getAllConsignController,
  getAllSupplierController,
  getAllUserController,
  getConsignDetailController,
  getSupplierController,
  updateConsignDetailController,
  updateSupplierController
} from '../controllers/manager.controllers.js'
import { getProfileController } from '../controllers/users.controllers.js'
import { isAdminValidator } from '../middlewares/manager.middlewares.js'
import { accessTokenValidator } from '../middlewares/users.middlewares.js'
import { wrapAsync } from '../utils/handle.js'
import { Router } from 'express'

const managerRouter = Router()

/** Vu Nguyen thiếu middleware check token và middleware check role
 * lấy tất cả user
 * path: '/manage-user/get-all'
 * method: get
 */
managerRouter.get('/manage-user/get-all', accessTokenValidator, isAdminValidator, wrapAsync(getAllUserController))

/*Vu Nguyen thiếu middleware check token và middleware check role
des: get profile của user khác bằng unsername
path: '/:username'
method: get
không cần header vì, chưa đăng nhập cũng có thể xem
*/
managerRouter.get('/manage-user/:username', accessTokenValidator, isAdminValidator, wrapAsync(getProfileController))

/**Vu Nguyen, thiếu middleware check token và middleware check role
 *
 */
managerRouter.post(
  '/manage-koi/create-new-koi',
  accessTokenValidator,
  isAdminValidator,
  wrapAsync(createNewKoiController)
)

managerRouter.get('/manage-ki-gui/get-all', accessTokenValidator, isAdminValidator, wrapAsync(getAllConsignController))

managerRouter.get('/manage-ki-gui/:_id', accessTokenValidator, isAdminValidator, wrapAsync(getConsignDetailController))

managerRouter.put('/manage-ki-gui/:_id', accessTokenValidator, isAdminValidator, wrapAsync(updateConsignDetailController))

managerRouter.post('/manage-supplier/create-new-supplier', accessTokenValidator, isAdminValidator, wrapAsync(createNewSupplierController))

managerRouter.get('/manage-supplier/get-all', accessTokenValidator, isAdminValidator, wrapAsync(getAllSupplierController))

managerRouter.put('/manage-supplier/:_id', accessTokenValidator, isAdminValidator, wrapAsync(updateSupplierController))

managerRouter.get('/manage-supplier/:_id', accessTokenValidator, isAdminValidator, wrapAsync(getSupplierController))

export default managerRouter
