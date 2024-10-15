import { ObjectId } from 'mongodb'
import databaseService from './database.service.js'

export const momoCallback = async (req, res) => {
  const OrderID = req.body.orderId
  await databaseService.order.findOneAndUpdate({ _id: new ObjectId(OrderID) }, { $set: { Status: 5 } }, { new: true })
}
