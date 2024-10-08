import { ObjectId } from 'mongodb'
import HTTP_STATUS from '../constants/httpStatus.js'
import { MANAGER_MESSAGES } from '../constants/managerMessage.js'
import { ErrorWithStatus } from '../models/Errors.js'
import databaseService from './database.service.js'

class ConsignsService {
  async getAllConsign() {
    try {
      const consigns = await databaseService.consigns.find({}).toArray()
      return consigns
    } catch (error) {
      console.error('Error fetching consigns:', error)
      throw error
    }
  }
  async getConsignDetail(consignID) {
    //tìm consign dựa vào consignID
    const consignObjectID = new ObjectId(consignID)
    const consign = await databaseService.consigns.findOne({ _id: consignObjectID })
    if (consign == null) {
      throw new ErrorWithStatus({
        message: MANAGER_MESSAGES.CONSIGN_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }
    return consign
  }
}

const consignsService = new ConsignsService()
export default consignsService
