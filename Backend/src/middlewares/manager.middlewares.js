import { ObjectId } from 'mongodb'
import HTTP_STATUS from '../constants/httpStatus.js'
import databaseService from '../services/database.service.js'
import { ErrorWithStatus } from '../models/Errors.js'
import { USERS_MESSAGES } from '../constants/userMessages.js'

export const isAdminValidator = async (req, res, next) => {
  try {
    const { user_id } = req.decoded_authorization
    const user = await databaseService.users.findOne({ _id: new ObjectId(user_id) })
    if (user === null) {
      throw new ErrorWithStatus({
        message: USERS_MESSAGES.USER_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }
    if (user.roleid !== 3) {
      throw new ErrorWithStatus({
        message: USERS_MESSAGES.ACCESS_DENIED_ADMIN_ONLY,
        status: HTTP_STATUS.FORBIDDEN
      })
    }
    next()
  } catch (error) {
    res.status(error.status || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: error.message || 'Internal Server Error'
    })
  }
}

export const SupplierIDAndCategoryIDValidator = async (req, res, next) => {
  try {
    const { SupplierID, GroupKoiCategoryID } = req.body
    const supplier = await databaseService.suppliers.findOne({ _id: new ObjectId(SupplierID) })
    if (supplier === null) {
      throw new ErrorWithStatus({
        message: USERS_MESSAGES.SUPPLIER_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }
    const category = await databaseService.category.findOne({ _id: new ObjectId(GroupKoiCategoryID) })
    if (category === null) {
      throw new ErrorWithStatus({
        message: USERS_MESSAGES.CATEGORY_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }
    next()
  } catch (error) {
    res.status(error.status || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: error.message || 'Internal Server Error'
    })
  }
}
