import { ObjectId } from 'mongodb'

export default class GroupKoiSchema {
  _id = new ObjectId()
  SupplierID = ''
  GroupKoiCategoryID = ''
  Dimension = ''
  BreedGroupKoi = ''
  PriceOneKoi = ''
  Quantity = ''
  GroupKoiImage = ''
  GroupKoiVideo = ''

  constructor(groupKoi) {
    this._id = groupKoi?._id ?? new ObjectId() // tự tạo id
    this.SupplierID = groupKoi.SupplierID || ''
    this.GroupKoiCategoryID = groupKoi.GroupKoiCategoryID || ''
    this.Dimension = groupKoi.Dimension || ''
    this.BreedGroupKoi = groupKoi.BreedGroupKoi || ''
    this.PriceOneKoi = groupKoi.PriceOneKoi || ''
    this.Quantity = groupKoi.Quantity || ''
    this.GroupKoiImage = groupKoi.GroupKoiImage || ''
    this.GroupKoiVideo = groupKoi.GroupKoiVideo || ''
  }
}
