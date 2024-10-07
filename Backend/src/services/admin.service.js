import databaseService from './database.service.js'
import KoiSchema from '../models/schemas/Koi.schema.js'
import { koiValidate } from '../middlewares/kois.middleware.js'
import { MESSAGES } from '../constants/message.js'
import { ObjectId } from 'mongodb'

class AdminsService {
  async getUser() {
    const result = await databaseService.users.find().toArray()
    return result
  }

  async getOrder() {
    const result = await databaseService.orders.find().toArray()
    return result
  }

  async getKoi() {
    const result = await databaseService.kois.find().toArray()
    return result
  }

  async addKoi(payload) {
    // validate input trước khi insert
    // nếu xảy ra lỗi trả về message
    const { error } = koiValidate(payload)
    if (error) {
      return { success: false, message: error.details[0].message }
    }

    await databaseService.kois.insertOne(
      new KoiSchema({
        ...payload
      })
    )
    return { success: true, message: MESSAGES.ADD_KOI_SUCCESS }
  }

  async updateKoi(KoiID, payload) {
    // validate input trước khi insert
    // nếu xảy ra lỗi trả về message
    const { error } = koiValidate(payload)
    if (error) {
      return { success: false, message: error.details[0].message }
    }

    await databaseService.kois.findOneAndUpdate({ _id: new ObjectId(KoiID) }, { $set: payload })
    return { success: true, message: MESSAGES.UPDATE_KOI_SUCCESS }
  }

  async updateStatusKoi(KoiID) {
    try {
      const result = await databaseService.kois.findOneAndUpdate(
        { _id: new ObjectId(KoiID) },
        { $set: { Status: 0 } },
        { new: true }
      )
      return { success: true, message: MESSAGES.UPDATE_KOI_SUCCESS }
    } catch (error) {
      return {success: false, message: 'FAIL'}
    }
    
  }
}

const adminService = new AdminsService()
export default adminService
