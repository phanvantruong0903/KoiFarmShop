import { ObjectId } from 'mongodb'

export default class ServiceSchema {
  _id = new ObjectId()
  ServiceName = ''
  ServiceImage = ''
  ServiceState = ''
  Price = ''
  Description = ''

  constructor(service) {
    this._id = service?._id ?? new ObjectId() // tự tạo id
    this.ServiceName = service.ServiceName || ''
    this.ServiceImage = service.ServiceImage || ''
    this.ServiceState = service.ServiceState || 1
    this.Price = service.Price || 0
    this.Description = service.Description || ''
  }
}
