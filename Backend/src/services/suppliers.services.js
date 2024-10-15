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
}

const suplliersService = new SuplliersService()
export default suplliersService
