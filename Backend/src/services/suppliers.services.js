import SupplierSchema from '../models/schemas/Supplier.schema.js'
import { ObjectId } from 'mongodb'
import databaseService from './database.service.js'

class SuplliersService {
  async createNewSupplier(payload) {
    const SupllierID = new ObjectId()
    const result = await databaseService.suppliers.insertOne(new SupplierSchema({ ...payload, _id: SupllierID }))
    console.log(payload)
    console.log(result)
    return result
  }

  async getAllSupplier() {
    try {
      const suppliers = await databaseService.suppliers.find({}).toArray()
      return suppliers
    } catch (error) {
      console.error('Error fetching suppliers:', error)
      throw error
    }
  }
}

const suplliersService = new SuplliersService()
export default suplliersService
