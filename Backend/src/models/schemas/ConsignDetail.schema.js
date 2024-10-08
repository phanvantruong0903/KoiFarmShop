import { ObjectId } from 'mongodb'

export default class ConsignDetailSchema {
  _id = new ObjectId()
  ConsignID = ''
  KoiID = ''
  Commission = ''
  TotalPrice = ''

  constructor(consignDetail) {
    this._id = consignDetail?._id ?? new ObjectId() // tự tạo id
    this.ConsignID = consignDetail.ConsignID || ''
    this.KoiID = consignDetail.KoiID || ''
    this.Commission = consignDetail.Commission || ''
    this.TotalPrice = consignDetail.TotalPrice || ''
  }
}
