import { Router } from 'express'
import { getOrderDetailController, makeOrderDetailController, updateOrderDetailController } from '../controllers/orderDetailController.js'
import { createOrderController } from '../controllers/order.controllers.js'

const orderRouter = Router()

//Order Detail
orderRouter.post('detail/make', makeOrderDetailController)
orderRouter.get('detail/:orderID', getOrderDetailController)
orderRouter.patch('detail/edit/:orderID',updateOrderDetailController)
//Order
orderRouter.post('/create', createOrderController)

export default orderRouter
