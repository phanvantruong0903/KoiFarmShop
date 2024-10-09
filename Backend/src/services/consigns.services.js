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
    const koiObjectID = new ObjectId(consign.KoiID)
    const koi = await databaseService.kois.findOne({ _id: koiObjectID })
    if (koi == null) {
      throw new ErrorWithStatus({
        message: MANAGER_MESSAGES.KOI_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }
    const userObjectID = new ObjectId(consign.UserID)
    const user = await databaseService.users.findOne(
      { _id: userObjectID },
      {
        projection: {
          password: 0,
          email_verify_token: 0,
          forgot_password_token: 0
        }
      }
    )
    if (user == null) {
      throw new ErrorWithStatus({
        message: MANAGER_MESSAGES.KOI_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }
    return {
      user: user,
      consign: consign,
      koi: koi
    }
  }
  //update
  async updateConsignDetail(consignID, payload) {
    //tìm consign dựa vào consignID
    const consignObjectID = new ObjectId(consignID)
    const consign = await databaseService.consigns.findOne({ _id: consignObjectID })
    if (consign == null) {
      throw new ErrorWithStatus({
        message: MANAGER_MESSAGES.CONSIGN_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }
    const koiObjectID = new ObjectId(consign.KoiID)
    const koi = await databaseService.kois.findOne({ _id: koiObjectID })
    if (koi == null) {
      throw new ErrorWithStatus({
        message: MANAGER_MESSAGES.KOI_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }
    const userObjectID = new ObjectId(consign.UserID)
    const user = await databaseService.users.findOne(
      { _id: userObjectID },
      {
        projection: {
          password: 0,
          email_verify_token: 0,
          forgot_password_token: 0
        }
      }
    )
    if (user == null) {
      throw new ErrorWithStatus({
        message: MANAGER_MESSAGES.KOI_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }
    // cập nhật lại các thông tin kí gửi
    const userUpdate = await databaseService.users.updateOne({ _id: new ObjectId(user._id) }, [
      {
        $set: {
          name: payload.name,
          address: payload.address,
          phone_number: payload.phone_number
        }
      }
    ])
    //cập nhật lại thông tin koi
    const koiUpdate = await databaseService.kois.updateOne({ _id: new ObjectId(koi._id) }, [
      {
        $set: {
          CategoryID: payload.CategoryID,
          KoiName: payload.KoiName,
          Age: payload.Age,
          Origin: payload.Origin,
          Gender: payload.Gender,
          Size: payload.Size,
          Breed: payload.Breed,
          Description: payload.Description,
          DailyFoodAmount: payload.DailyFoodAmount,
          FilteringRatio: payload.FilteringRatio,
          Status: payload.Status,
          CertificateID: payload.CertificateID,
          Price: payload.Price,
          Image: payload.Image,
          Video: payload.Video
        }
      }
    ])
    //cập nhật lại thông tin kí gửi
    const consignUpdate = await databaseService.consigns.updateOne({ _id: new ObjectId(consign._id) }, [
      {
        $set: {
          ShippedDate: payload.ShippedDate,
          ReceiptDate: payload.ReceiptDate,
          Description: payload.Description,
          Status: payload.Status,
          Method: payload.Method,
          PositionCare: payload.PositionCare,
          Commission: payload.Commission,
          TotalPrice: payload.TotalPrice
        }
      }
    ])
    return {
      user: userUpdate,
      consign: consignUpdate,
      koi: koiUpdate
    }
  }
}

const consignsService = new ConsignsService()
export default consignsService
