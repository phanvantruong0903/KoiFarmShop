// import OrderSchema from '../models/schemas/Order.schema.js'
import { USERS_MESSAGES } from '../constants/userMessages.js';
import ordersService from '../services/orders.Service.js';

export const createOrderController = async (req, res) => {
  try {
    const { type } = req.body; // Nhận type từ request (cart hoặc buyNow)
    let result;

    if (type === 'buyNow') {
      result = await ordersService.createBuyNowOrder(req.body);
    } else {
      result = await ordersService.createCartOrder(req.body, req.params);
    }

    console.log("result: ", result)
    return res.json({
      message: USERS_MESSAGES.CREATE_ORDER_SUCCESS,
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


