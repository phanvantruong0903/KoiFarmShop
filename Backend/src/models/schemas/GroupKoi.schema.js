import { ObjectId } from 'mongodb'

export default class GroupKoiSchema {
  _id = new ObjectId()
  GroupKoiCategoryID = ''

  constructor(groupKoi) {
    this._id = groupKoi?._id ?? new ObjectId() // tự tạo id
    this.GroupKoiCategoryID = groupKoi.GroupKoiCategoryID || ''
  }
}
