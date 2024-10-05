import { ObjectId } from 'mongodb'
import HTTP_STATUS from '../constants/httpStatus.js'
import databaseService from '../services/database.service.js'
import { ErrorWithStatus } from '../models/Errors.js'
import { USERS_MESSAGES } from '../constants/messages.js'

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
