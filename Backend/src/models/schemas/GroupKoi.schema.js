import { ObjectId } from 'mongodb'

export default class GroupKoiSchema {
  _id = new ObjectId()
  SupplierID = ''
  GroupKoiCategoryID = ''
  PriceOneKoi = ''
  Quantity = ''

  constructor(groupKoi) {
    this._id = groupKoi?._id ?? new ObjectId() // tự tạo id
    this.SupplierID = groupKoi.SupplierID || ''
    this.GroupKoiCategoryID = groupKoi.GroupKoiCategoryID || ''
    this.PriceOneKoi = groupKoi.PriceOneKoi || ''
    this.Quantity = groupKoi.Quantity || ''
  }
}
