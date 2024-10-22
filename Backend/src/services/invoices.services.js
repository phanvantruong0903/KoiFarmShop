import { ObjectId } from 'mongodb'
import databaseService from './database.service.js'
import GroupKoiSchema from '../models/schemas/GroupKoi.schema.js'
import InvoiceSchema from '../models/schemas/Invoice.schema.js'
import KoiSchema from '../models/schemas/Koi.schema.js'
import { ErrorWithStatus } from '../models/Errors.js'
import { MANAGER_MESSAGES } from '../constants/managerMessage.js'
import HTTP_STATUS from '../constants/httpStatus.js'

class InvoicesService {
  async createNewInvoiceGroupKoi(payload) {
    let group_koi_id = new ObjectId()
    const GroupKoiID = group_koi_id.toString()

    const groupKoiPayLoad = {
      _id: group_koi_id,
      SupplierID: payload.SupplierID,
      GroupKoiCategoryID: payload.GroupKoiCategoryID,
      Dimension: payload.Dimension,
      BreedGroupKoi: payload.BreedGroupKoi,
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
        Breed: payload.BreedGroupKoi,
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

  async getAllInvoice() {
    try {
      const invoices = await databaseService.invoices.find({}).toArray()
      return invoices
    } catch (error) {
      console.error('Error fetching invoices:', error)
      throw error
    }
  }

  async getInvoice(invoiceid) {
    const invoiceObjectID = new ObjectId(invoiceid)
    const invoice = await databaseService.invoices.findOne({ _id: invoiceObjectID })
    if (invoice == null) {
      throw new ErrorWithStatus({
        message: MANAGER_MESSAGES.INVOICE_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }
    return invoice
  }
}

const invoicesService = new InvoicesService()
export default invoicesService
