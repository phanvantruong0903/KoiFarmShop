  import { ObjectId } from 'mongodb'

  export default class OrderDetailSchema {
    _id = new ObjectId()
    OrderID = ''
    Items = []
    Discount = '' 
    TotalPrice = ''

    constructor(orderDetail) {
      this._id = orderDetail?._id ?? new ObjectId() // tự tạo id
      this.OrderID = orderDetail?.OrderID ?? ""
      this.Items = orderDetail?.Items?.map(item => ({
        KoiID: item.KoiID,
        Quantity: item.Quantity ?? 1
      })) || []     
      this.TotalPrice = order?.TotalPrice ?? 0
    }
  }
