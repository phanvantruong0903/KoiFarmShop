import SupplierSchema from '../models/schemas/Supplier.schema.js'
import { ObjectId } from 'mongodb'
import databaseService from './database.service.js'
import { MANAGER_MESSAGES } from '../constants/managerMessage.js'
import HTTP_STATUS from '../constants/httpStatus.js'
import _ from 'lodash'

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

  async updateSupplier(supplierid, payload) {
    const supplierObjectID = new ObjectId(supplierid)
    const supplier = await databaseService.suppliers.findOne({ _id: supplierObjectID })
    if (supplier == null) {
      throw new ErrorWithStatus({
        message: MANAGER_MESSAGES.SUPPLIER_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }
    const supplierUpdate = await databaseService.suppliers.updateOne({ _id: supplierObjectID }, [
      {
        $set: {
          SupplierName: payload.SupplierName,
          Address: payload.Address,
          Country: payload.Country,
          PhoneNumber: payload.PhoneNumber
        }
      }
    ])
    return supplierUpdate
  }

  async getSupplier(supplierid) {
    const supplierObjectID = new ObjectId(supplierid)
    const supplier = await databaseService.suppliers.findOne({ _id: supplierObjectID })
    if (supplier == null) {
      throw new ErrorWithStatus({
        message: MANAGER_MESSAGES.SUPPLIER_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }
    return supplier
  }

  async guestGetAllSupplier() {
    try {
      const suppliers = await databaseService.suppliers.find({}).toArray()
      const suppliersWithoutId = suppliers.map((supplier) => _.omit(supplier, ['_id']))
      return suppliersWithoutId
    } catch (error) {
      console.error('Error fetching suppliers:', error)
      throw error
    }
  }

  async guestGetSupplier(supplierid) {
    const supplierObjectID = new ObjectId(supplierid)
    const supplier = await databaseService.suppliers.findOne({ _id: supplierObjectID })
    if (supplier == null) {
      throw new ErrorWithStatus({
        message: MANAGER_MESSAGES.SUPPLIER_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }
    const suppliersWithoutId = _.omit(supplier, ['_id'])
    return suppliersWithoutId
  }
}

const suplliersService = new SuplliersService()
export default suplliersService
