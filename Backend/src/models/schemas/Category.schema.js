import { ObjectId } from 'mongodb'

export default class CategorySchema {
  _id = new ObjectId()
  CategoryName = ''
  Detail = ''

  constructor(Category) {
    this._id = Category?._id ?? new ObjectId() // tự tạo id
    this.CategoryName = Category.CategoryName || ''
    this.Detail = Category.Detail || ''
  }
}
