// import User from '../models/schemas/User.schema.js'
import databaseService from './database.service.js'

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
}

const adminService = new AdminsService()
export default adminService