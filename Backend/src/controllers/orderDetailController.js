import { USERS_MESSAGES } from '../constants/userMessages.js';
import orderDetailService from '../services/orderDetail.services.js';


export const makeOrderDetailController = async (req, res) => {
    try {
      const reqCookie = req.cookies && req.cookies.order ? JSON.parse(req.cookies.order) : {}; // fix phải check có trong cookies trước
      console.log("reqCookie: ",reqCookie)
      const result = await orderDetailService.makeOrder(req.body, reqCookie);
      res.cookie('order', JSON.stringify(result.order), {
        httpOnly: true,
        maxAge: 1800000 // 30 minutes
      })
      console.log("result: ",result)
        return res.json({
          message: USERS_MESSAGES.MAKE_ORDER_SUCCESS,
          result
        })
      } catch (error) {
        return res.status(500).json({ error: error.message })
      }
};

export const getOrderDetailController = async (req, res) => {
  try {
    const result = await orderDetailService.fetchOrder(req.params);
    
    console.log("result: ",result)
      return res.json({
        message: USERS_MESSAGES.GET_ORDER_SUCCESS,
        result
      })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
};


export const updateOrderDetailController = async (req, res) => {
  try {
    const result = await orderDetailService.updateOrder(req.body, req.params);
    console.log("result: ",result)
      return res.json({
        message: USERS_MESSAGES.UPDATE_ORDER_SUCCESS,
        result
      })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
};
export const getKoiPriceController = async(req,res)=>{
  try {
    const result = await orderDetailService.getKoiPrice(req.body);
    console.log("result: ",result)
      return res.json({
        message: USERS_MESSAGES.GET_AVAILABLE_KOI_QUANTITY,
        result
      })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
}

