import { ObjectId } from 'mongodb'

export default class GroupKoiSchema {
  _id = new ObjectId()
  SupplierID = ''
  GroupKoiCategoryID = ''

  constructor(groupKoi) {
    this._id = groupKoi?._id ?? new ObjectId() // tự tạo id
    this.SupplierID = groupKoi.SupplierID || ''
    this.GroupKoiCategoryID = groupKoi.GroupKoiCategoryID || ''
  }
}
