import { ObjectId } from 'mongodb'
import databaseService from './database.service.js'
import GroupKoiSchema from '../models/schemas/GroupKoi.schema.js'
import InvoiceSchema from '../models/schemas/Invoice.schema.js'
import KoiSchema from '../models/schemas/Koi.schema.js'

class InvoicesService {
  async createNewInvoiceGroupKoi(payload) {
    let group_koi_id = new ObjectId()
    const GroupKoiID = group_koi_id.toString()

    const groupKoiPayLoad = {
      _id: group_koi_id,
      SupplierID: payload.SupplierID,
      GroupKoiCategoryID: payload.GroupKoiCategoryID,
      Dimension: payload.Dimension,
      PriceOneKoi: payload.PriceOneKoi,
      Quantity: payload.Quantity,
      GroupKoiImage: payload.GroupKoiImage,
      GroupKoiVideo: payload.GroupKoiVideo
    }
    const groupKoiResult = await databaseService.groupKois.insertOne(new GroupKoiSchema(groupKoiPayLoad))

    // Tạo ra các con koi dựa vào quantity
    const koiArray = []
    for (let i = 0; i < payload.Quantity; i++) {
      let koi_id = new ObjectId()
      const koiPayload = {
        _id: koi_id,
        GroupKoiID: GroupKoiID,
        CategoryID: payload.GroupKoiCategoryID.toString(),
        Size: payload.Dimension,
        Status: 1,
        Price: payload.PriceOneKoi + 700000,
        Image: payload.GroupKoiImage,
        Video: payload.GroupKoiVideo
      }
      koiArray.push(new KoiSchema(koiPayload))
    }
    const koiResult = await databaseService.kois.insertMany(koiArray)

    //tạo hóa đơn
    const InvoiceID = new ObjectId()
    const invoicePayload = {
      _id: InvoiceID,
      GroupKoiIDInvoice: GroupKoiID,
      InvoiceDate: new Date(),
      Status: 1,
      Discount: payload.Discount,
      TotalPrice:
        payload.Quantity * payload.PriceOneKoi - payload.Quantity * payload.PriceOneKoi * (payload.Discount / 100)
    }
    const invoiceResult = await databaseService.invoices.insertOne(new InvoiceSchema(invoicePayload))

    return {
      groupKoi: groupKoiResult,
      kois: koiResult,
      invoice: invoiceResult
    }
  }
}

const invoicesService = new InvoicesService()
export default invoicesService
