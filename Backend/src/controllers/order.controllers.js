// import OrderSchema from '../models/schemas/Order.schema.js'
import { USERS_MESSAGES } from '../constants/userMessages.js';
import { saveOrderToDatabase } from '../services/callback.service.js';
import ordersService from '../services/orders.Service.js';

export const createOrderController = async (req, res) => {
  try {
    const reqOrderCookie = req.cookies && req.cookies.order ? JSON.parse(req.cookies.order) : {}
    const result = await ordersService.createOrder(req.body,req.params, reqOrderCookie)
    res.cookie('order', JSON.stringify(result.order))
    console.log("result: ", result)
    return res.json({
      message: USERS_MESSAGES.CREATE_ORDER_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
export const getOrderController = async (req, res) => {
  try {
    const { user_id } = req.decoded_authorization
    const user = await databaseService.users.findOne({ _id: new ObjectId(user_id) })
    if (user === null) {
      throw new ErrorWithStatus({
        message: USERS_MESSAGES.USER_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }
    const result = await ordersService.getOrder(user)

    console.log("result: ", result)
    return res.json({
      message: USERS_MESSAGES.GET_ORDER_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
export const updateOrderStatusController = async (req, res) => {
  try {
    const result = await ordersService.updateOrderStatus(req.body, req.params);
    console.log("result: ", result)
    return res.json({
      message: USERS_MESSAGES.UPDATE_ORDER_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
export const saveOrderController = async (req, res) => {
  try {
    const reqOrderCookie = req.cookies && req.cookies.order ? JSON.parse(req.cookies.order) : {}
    const result = await saveOrderToDatabase(reqOrderCookie);
    res.clearCookie('order')
    return res.json({
      message: USERS_MESSAGES.UPDATE_ORDER_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};


