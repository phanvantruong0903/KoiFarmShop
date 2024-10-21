import CryptoJS from 'crypto-js'
import databaseService from './database.service.js'
import { ObjectId } from 'mongodb';
import OrdersSchema from '../models/schemas/Order.schema.js';

export const callback = async (req, res) => {
  let result = {}
  console.log(req.body)
  try {
    const config = {
      app_id: '2554',
      key2: 'trMrHtvjo6myautxDUiAcYsVtaeQ8nhf',
    }

    let dataStr = req.body.data
    let reqMac = req.body.mac

    let mac = CryptoJS.HmacSHA256(dataStr, config.key2).toString()

    // kiểm tra callback hợp lệ (đến từ ZaloPay server)
    if (reqMac !== mac) {
      // callback không hợp lệ
      result.returncode = -1
      result.returnmessage = 'mac not equal'
    } else {
      let dataJson = JSON.parse(dataStr, config.key2);

      const embedData = JSON.parse(dataJson.embed_data);
      const OrderID = embedData.OrderID;

      await databaseService.order.findOneAndUpdate(
        { _id: new ObjectId(OrderID) },
        { $set: { Status: 2 } },
        { new: true }
      );

      result.returncode = 1
      result.returnmessage = 'success'
    }
  } catch (ex) {
    result.returncode = 0 // ZaloPay server sẽ callback lại (tối đa 3 lần)
    result.returnmessage = ex.message
  }

  res.json(result)
}

export const saveOrderToDatabase = async (reqOrderCookie) => {
  // console.log("Cookies DT received:", reqOrderDTCookie);
  console.log("Cookies received:", reqOrderCookie);
  //check order cookie có exist
  if (!reqOrderCookie) {
    return res.status(400).json({ error: 'No order data found in cookies' });
  }

  // const newOrderDT = {
  //   _id: new ObjectId(),
  //   Items: reqOrderDTCookie.Items,
  //   TotalPrice: reqOrderDTCookie.TotalPrice
  // }

  // const orderDT = await databaseService.orderDetail.insertOne(newOrderDT)
  // if(orderDT.insertedId){
  //   newOrderDT._id = orderDT.insertedId
  // }

  const newOrder = {
    _id: new ObjectId(),
    UserID: reqOrderCookie.UserID,
    // OrderDetailID: newOrderDT._id,
    OrderDetailID: reqOrderCookie.OrderDetailID,
    ShipAddress: reqOrderCookie.ShipAddress,
    Description: reqOrderCookie.Description,
    OrderDate: reqOrderCookie.OrderDate || new Date(),
    Status: reqOrderCookie.Status || 1,
  }

  const order = await databaseService.order.insertOne(newOrder)
  if (order.insertedId) {
    newOrder._id = order.insertedId;
  } else {
    return {
      message: 'Fail to save'
    }
  }
  return order
}
