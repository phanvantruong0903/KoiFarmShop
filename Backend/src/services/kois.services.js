import bcrypt from 'bcrypt'
import { ObjectId } from 'mongodb'
import databaseService from './database.service.js'
import KoiSchema from '../models/schemas/Koi.schema.js'

class KoisService {
  async createNewKoi(payload) {
    const KoiID = new ObjectId()
    const result = await databaseService.kois.insertOne(new KoiSchema({ ...payload, _id: KoiID }))
    console.log(payload)
    console.log(result)
    return result
  }

  // async createNewKoiKiGui(payload) {
  //   const KoiID = new ObjectId()
  //   const result = await databaseService.koi.insertOne(new KoiSchema({ ...payload, _id: KoiID, Status: 4 }))
  //   console.log(payload)
  //   console.log(result)
  //   return result
  // }

  //test createNewKoiKiGui với payload full thông tin cần thiết từ người dùng
  async createNewKoiKiGui(payload) {
    // Tạo mật khẩu ngẫu nhiên
    const password = Math.random().toString(36).slice(-8)
    const hashedPassword = await bcrypt.hash(password, 10)

    // Tạo người dùng mới
    const userPayload = {
      email: payload.email,
      name: payload.name,
      address: payload.address,
      phone_number: payload.phone_number,
      password: hashedPassword
    }
    const userResult = await databaseService.users.insertOne(userPayload)
    const userId = userResult.insertedId

    // Tạo bản ghi mới trong bảng consigns
    const consignPayload = {
      PositionCare: payload.PositionCare,
      Method: payload.Method,
      UserID: userId,
      _id: new ObjectId()
    }
    const consignResult = await databaseService.consigns.insertOne(consignPayload)

    // Tạo bản ghi mới trong bảng kois
    const koiPayload = {
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
      CertificateID: payload.CertificateID,
      Price: payload.Price,
      Image: payload.Image,
      Video: payload.Video,
      Status: 4, // Đặt status là 4
      _id: new ObjectId()
    }
    const koiResult = await databaseService.koi.insertOne(koiPayload)

    // Trả về kết quả
    return {
      user: userResult,
      consign: consignResult,
      koi: koiResult
    }
  }
}

const koisService = new KoisService()
export default koisService
