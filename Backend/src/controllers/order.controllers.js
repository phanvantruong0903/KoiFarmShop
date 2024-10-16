// import OrderSchema from '../models/schemas/Order.schema.js'
import { USERS_MESSAGES } from '../constants/userMessages.js';
import ordersService from '../services/orders.Service.js';

export const createOrderController = async (req, res) => {
  try {
    const result = await ordersService.createOrder(req.body, req.params)

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
    const result = await ordersService.getOrder(req.body)

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


