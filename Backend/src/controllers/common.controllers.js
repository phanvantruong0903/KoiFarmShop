import HTTP_STATUS from '../constants/httpStatus.js'
import { MESSAGES } from '../constants/message.js'
import { USERS_MESSAGES } from '../constants/userMessages.js'
import { ErrorWithStatus } from '../models/Errors.js'
import databaseService from '../services/database.service.js'
import koisService from '../services/kois.services.js'
import { ObjectId } from 'mongodb'
import suplliersService from '../services/suppliers.services.js'

export const createNewKoiKiGuiController = async (req, res) => {
  try {
    const result = await koisService.createNewKoiKiGui(req.body)
    return res.json({
      message: MESSAGES.CREATE_NEW_KOI_KI_GUI_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const authorizationController = async (req, res) => {
  try {
    const { user_id } = req.decoded_authorization
    const user = await databaseService.users.findOne({ _id: new ObjectId(user_id) })
    if (user === null) {
      throw new ErrorWithStatus({
        message: USERS_MESSAGES.USER_NOT_FOUND,
        status: HTTP_STATUS.NOT_FOUND
      })
    }
    const result = user.roleid
    return res.json({
      message: USERS_MESSAGES.CHECK_AUTHORIZATION_SUCCESS,
      result
    })
  } catch (error) {
    res.status(error.status || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: error.message || 'Internal Server Error'
    })
  }
}

export const getAllServiceController = async (req, res) => {
  try {
    const result = await databaseService.services.find().toArray()
    res.json({
      result
    })
  } catch (error) {
    res.status(error.status || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: error.message || 'Internal Server Error'
    })
  }
}

export const getKoiByIDController = async (req, res) => {
  try {
    const { KoiID } = req.params
    const result = await databaseService.kois.find({ _id: new ObjectId(KoiID) })
    res.json({
      result
    })
  } catch (error) {
    res.status(404).json({ messga: 'Koi not found' })
  }
}

export const guestGetAllSupplierController = async (req, res) => {
  try {
    const result = await suplliersService.guestGetAllSupplier()
    return res.json({
      message: MESSAGES.GET_ALL_SUPPLIER_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const guestGetSupplierController = async (req, res) => {
  try {
    const { _id } = req.params
    const result = await suplliersService.guestGetSupplier(_id)
    return res.json({
      message: MESSAGES.GET_SUPPLIER_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}