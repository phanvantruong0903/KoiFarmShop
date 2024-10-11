import bcrypt from 'bcrypt'
import { ObjectId } from 'mongodb'
import databaseService from './database.service.js'
import KoiSchema from '../models/schemas/Koi.schema.js'
import UserSchema from '../models/schemas/User.schema.js'
import ConsignSchema from '../models/schemas/Consign.schema.js'
import usersService from './users.services.js'

class KoisService {
  async createNewKoi(payload) {
    const KoiID = new ObjectId()
    const result = await databaseService.kois.insertOne(new KoiSchema({ ...payload, _id: KoiID }))
    console.log(payload)
    console.log(result)
    return result
  }

  //test createNewKoiKiGui với payload full thông tin cần thiết từ người dùng
  async createNewKoiKiGui(payload) {
    // Tạo mật khẩu ngẫu nhiên
    const password = Math.random().toString(36).slice(-8)
    const hashedPassword = await bcrypt.hash(password, 10)

    // Tạo người dùng mới
    let user_id = new ObjectId()

    //check xem email đó đã có trong db chưa
    //nếu có rồi tức là đã có người dùng này rồi
    //thì sẽ không tạo mới user nữa mà lấy id của user đó
    //để tạo consign
    const userCheck = await databaseService.users.findOne({ email: payload.email })

    let userResult

    if (userCheck) {
      user_id = userCheck._id
    } else {
      const userPayload = {
        _id: user_id,
        email: payload.email,
        name: payload.name,
        address: payload.address,
        phone_number: payload.phone_number,
        password: hashedPassword,
        username: `user${user_id.toString()}`,
        roleid: 1
      }
      userResult = await databaseService.users.insertOne(new UserSchema(userPayload))
      //test register khi tạo mới user
      // userResult = await usersService.register(userPayload)
    }

    const userId = user_id.toString()

    // Tạo bản ghi mới trong bảng kois
    const koiID = new ObjectId()
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
      _id: koiID
    }
    const koiResult = await databaseService.kois.insertOne(new KoiSchema(koiPayload))

    // Tạo bản ghi mới trong bảng consigns
    const consignID = new ObjectId()
    const consignPayload = {
      PositionCare: payload.PositionCare,
      Method: payload.Method,
      UserID: userId,
      KoiID: koiID.toString(),
      _id: consignID,
      State: 1
    }
    const consignResult = await databaseService.consigns.insertOne(new ConsignSchema(consignPayload))

    // Trả về kết quả
    return {
      user: userResult || userCheck._id,
      consign: consignResult,
      koi: koiResult
    }
  }
}

const koisService = new KoisService()
export default koisService
