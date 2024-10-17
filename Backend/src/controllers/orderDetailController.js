import { USERS_MESSAGES } from '../constants/userMessages.js';
import orderDetailService from '../services/orderDetail.services.js';


export const makeOrderDetailController = async (req, res) => {
  try {
    let reqCookie = req.cookies && req.cookies.order ? JSON.parse(req.cookies.order) : null; // fix phải check có trong cookies trước
    const result = await orderDetailService.addToCart(req.body, reqCookie);
      res.cookie('order', JSON.stringify(result.order), {
        httpOnly: true,
        maxAge: 1800000 // 30 mins
      });
    return res.json({
      message: USERS_MESSAGES.MAKE_ORDER_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};
export const buyNowController = async (req, res) => {
  try {
    let reqCookie = req.cookies?.order
    reqCookie = {}; // tạo cookies mới cho func buyNow 
    const result = await orderDetailService.buyNow(req.body, reqCookie);
    console.log("result: ", result)
    return res.json({
      message: USERS_MESSAGES.BUY_ORDER_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};

export const getOrderDetailController = async (req, res) => {
  try {
    const result = await orderDetailService.fetchOrder(req.params);

    console.log("result: ", result)
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
    const result = await orderDetailService.updateItemQuantity(req.body, req.params);
    console.log("result: ", result)
    return res.json({
      message: USERS_MESSAGES.UPDATE_ORDER_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};

export const getKoiQuantityController = async (req, res) => {
  try {
  const result = await orderDetailService.getKoiQuantity(req.body);
    console.log("result: ", result)
    if(result){
      return res.json({
        message: USERS_MESSAGES.GET_AVAILABLE_KOI_QUANTITY,
        result
      })
    }else{
      return res.json({
        message: USERS_MESSAGES.OUT_OF_STOCK
      })
    }
    
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
export const getMinMaxPriceController = async (req, res) => {
  try {
    const result = await orderDetailService.getMinMaxPrice(req.body);
    console.log("result: ", result)
    return res.json({
      message: USERS_MESSAGES.GET_MIN_MAX_PRICE,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
export const getKoiByPriceController = async (req, res) => {
  try {
    const result = await orderDetailService.getKoiByPrice(req.body);
    console.log("result: ", result)
    if(result && result.length > 0){
      return res.json({
        message: USERS_MESSAGES.GET_KOI_SUCCESS,
        result
      })
    }else{
      return res.json({
        message: USERS_MESSAGES.OUT_OF_STOCK,
        result
      })
    }
    
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}



