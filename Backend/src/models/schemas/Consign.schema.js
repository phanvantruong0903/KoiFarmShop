import { ObjectId } from 'mongodb'

export default class ConsignSchema {
  _id = new ObjectId()
  UserID = ''
  ShippedDate = new Date()
  ReceiptDate = new Date()
  Description = ''
  Status = ''
  Method = ''
  PositionCare = ''

  constructor(consign) {
    const date = new Date() //tạo này cho ngày created_at updated_at bằng nhau
    this._id = consign?._id ?? new ObjectId() // tự tạo id
    this.UserID = consign.UserID || ''
    this.ShippedDate = consign.ShippedDate || date
    this.ReceiptDate = consign.ReceiptDate || date
    this.Description = consign.Description || ''
    this.Status = consign.Status || 1
    this.Method = consign.Method || ''
    this.PositionCare = consign.PositionCare || ''
  }
}

// const UserSchema = new User()
// export default UserSchema
