import { ObjectId } from 'mongodb'

export default class ConsignSchema {
  _id = new ObjectId()
  UserID = ''
  ShippedDate = ''
  ReceiptDate = ''
  Description = ''
  Status = ''
  Method = ''
  PositionCare = ''

  constructor(consign) {
    this._id = consign?._id ?? new ObjectId() // tự tạo id
    this.UserID = consign.UserID || ''
    this.ShippedDate = consign.ShippedDate || ''
    this.ReceiptDate = consign.ReceiptDate || ''
    this.Description = consign.Description || ''
    this.Status = consign.Status || 1
    this.Method = consign.Method || ''
    this.PositionCare = consign.PositionCare || ''
  }
}
