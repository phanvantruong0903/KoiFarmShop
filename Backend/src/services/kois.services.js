import { ObjectId } from 'mongodb'
import databaseService from './database.service.js'
import KoiSchema from '../models/schemas/Koi.schema.js'

class KoisService {
  async createNewKoi(payload) {
    const KoiID = new ObjectId()
    const result = await databaseService.koi.insertOne(new KoiSchema({ ...payload, _id: KoiID }))
    console.log(payload)
    console.log(result)
    return result
  }
}

const koisService = new KoisService()
export default koisService
