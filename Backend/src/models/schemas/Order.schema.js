import { ObjectId } from 'mongodb'

export default class OrdersSchema {
  _id = new ObjectId()
  UserID = ''
  OrderDetailID = []
  ShipAddress = ''
  Description = ''
  OrderDate = ''
  Status = ''
  TotalPrice = ''

  constructor(order) {
    this._id = order?._id ?? new ObjectId() // tự tạo id
    this.UserID = order.UserID || ""
    this.OrderDetailID = order.OrderDetailID || []
    this.ShipAddress = order.ShipAddress || ""
    this.Description = order.Description || ""
    this.OrderDate = order?.OrderDate ?? new Date()
    this.Status = order.Status || "1"
  }
}
