import { ObjectId } from 'mongodb'

export default class InvoiceSchema {
  _id = new ObjectId()
  SupplierID = ''
  GroupKoiIDInvoice = ''
  Quantity = ''
  InvoiceDate = new Date()
  TotalPrice = ''
  Status = ''

  constructor(invoice) {
    const date = new Date()
    this._id = invoice?._id ?? new ObjectId() // tự tạo id
    this.SupplierID = invoice.SupplierID || ''
    this.GroupKoiIDInvoice = invoice.GroupKoiIDInvoice || ''
    this.Quantity = invoice.Quantity || ''
    this.InvoiceDate = invoice.InvoiceDate || date
    this.TotalPrice = invoice.TotalPrice || ''
    this.Status = invoice.Status || ''
  }
}
