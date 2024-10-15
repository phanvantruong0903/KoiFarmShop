import { createNewServiceController, updateOrderStatusController, updateServiceController } from '../controllers/manager.controllers.js'
import {
  createCategoryController,
  createNewKoiController,
  createNewSupplierController,
  getAllConsignController,
  getAllUserController,
  getConsignDetailController,
  updateConsignDetailController,
  getAllKoiController,
  getAllOrderController,
  updateKoiController,
  updateStatusKoiController,
  updateStatusUserController,
  updateUserController
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

managerRouter.get('/manage-order/get-all', accessTokenValidator, isAdminValidator, wrapAsync(getAllOrderController))

managerRouter.get('/manage-koi/get-all', accessTokenValidator, isAdminValidator, wrapAsync(getAllKoiController))

managerRouter.put(
  '/manage-koi/updateKoi/:KoiID',
  accessTokenValidator,
  isAdminValidator,
  wrapAsync(updateKoiController)
)

managerRouter.put(
  '/manage-koi/disable-enable/:KoiID',
  accessTokenValidator,
  accessTokenValidator,
  wrapAsync(updateStatusKoiController)
)

managerRouter.post(
  '/manage-category/createNewCategory',
  accessTokenValidator,
  accessTokenValidator,
  wrapAsync(createCategoryController)
)

managerRouter.post(
  '/manage-user/updateUser/:UserID',
  accessTokenValidator,
  accessTokenValidator,
  wrapAsync(updateUserController)
)

managerRouter.post(
  '/manage-user/disable-enable/:UserID',
  accessTokenValidator,
  accessTokenValidator,
  wrapAsync(updateStatusUserController)
)

managerRouter.put(
  '/manage-ki-gui/:_id',
  accessTokenValidator,
  isAdminValidator,
  wrapAsync(updateConsignDetailController)
)

managerRouter.post(
  '/manage-service/create-new-service',
  accessTokenValidator,
  isAdminValidator,
  wrapAsync(createNewServiceController)
)

managerRouter.put(
  '/manage-service/update-service/:ServiceID',
  accessTokenValidator,
  isAdminValidator,
  wrapAsync(updateServiceController)
)

managerRouter.patch('/order/updateOrderStatus/:OrderID',wrapAsync(updateOrderStatusController))

managerRouter.post('/manage-supplier/create-new-supplier', accessTokenValidator, isAdminValidator, wrapAsync(createNewSupplierController))

export default managerRouter
