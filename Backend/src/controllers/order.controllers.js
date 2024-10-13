// import OrderSchema from '../models/schemas/Order.schema.js'
import { USERS_MESSAGES } from '../constants/userMessages.js';
import databaseService from '../services/database.service.js';
import ordersService from '../services/orders.Service.js';

export const createOrderController = async(req,res)=>{
    try {
        const result = await ordersService.createOrder(req.body, req.params);
        
        console.log("result: ",result)
          return res.json({
            message: USERS_MESSAGES.CREATE_ORDER_SUCCESS,
            result
          })
        } catch (error) {
          return res.status(500).json({ error: error.message })
        }
}

