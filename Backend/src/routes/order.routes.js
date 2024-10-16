import { Router } from 'express'
import {
    buyNowController,
  getKoiQuantityController,
  getMinMaxPriceController,
  getOrderDetailController,
  makeOrderDetailController,
  updateOrderDetailController
} from '../controllers/orderDetailController.js'
import { createOrderController, getOrderController } from '../controllers/order.controllers.js'
import { accessTokenValidator } from '../middlewares/users.middlewares.js'
import { wrapAsync } from '../utils/handle.js'

const orderRouter = Router()

//Order Detail
orderRouter.post('/detail/make', makeOrderDetailController)
orderRouter.post('/detail/buy', buyNowController)
orderRouter.get('/detail/:orderID', getOrderDetailController)
orderRouter.patch('/detail/edit/:orderID', updateOrderDetailController)
orderRouter.post('/detail/price', getKoiQuantityController)
//Order
orderRouter.post('/create/:orderDTID', createOrderController)
orderRouter.get('/',accessTokenValidator, wrapAsync(getOrderController))
//Price
orderRouter.post('/detail/price/minmax', getMinMaxPriceController)

export default orderRouter
