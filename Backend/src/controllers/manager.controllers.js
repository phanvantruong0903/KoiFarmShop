import { MANAGER_MESSAGES } from '../constants/managerMessage.js'
import consignsService from '../services/consigns.services.js'
import consignsService from '../services/consigns.services.js'
import koisService from '../services/kois.services.js'
import usersService from '../services/users.services.js'
import adminService from '../services/admin.service.js'
import databaseService from '../services/database.service.js'

export const getAllUserController = async (req, res) => {
  try {
    const result = await usersService.getAllUser()
    return res.json({
      message: MANAGER_MESSAGES.GET_ALL_USERS_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const getAllOrderController = async (req, res) => {
  const result = await adminService.getOrder()
  res.json({
    result
  })
}

export const getAllKoiController = async (req, res) => {
  const koisList = await adminService.getKoi()
  const cateogryList = await databaseService.category.find().toArray()
  res.json({
    koisList,
    cateogryList
  })
}

export const createNewKoiController = async (req, res) => {
  try {
    const result = await koisService.createNewKoi(req.body)
    return res.json({
      message: MANAGER_MESSAGES.CREATE_NEW_KOI_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const getAllConsignController = async (req, res) => {
  try {
    const result = await consignsService.getAllConsign()
    return res.json({
      message: MANAGER_MESSAGES.GET_ALL_CONSIGNS_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const updateKoiController = async (req, res) => {
  try {
    const { KoiID } = req.params
    const result = await adminService.updateKoi(KoiID, req.body)
    // result trả về success "true" nếu thành công và ngược lại trả về false khi validate dữ liệu đầu vào fail
    // message do Joi trả về khi validate
    if (!result.success) {
      return res.status(400).json({
        message: result.message
      })
    }
    res.json({
      message: result.message,
      result
    })
  } catch (error) {
    console.log(error)
  }
}

export const updateStatusKoiController = async (req, res) => {
  try {
    const { KoiID } = req.params
    const result = await adminService.updateStatusKoi(KoiID)
    // result trả về success "true" nếu thành công và ngược lại trả về false khi validate dữ liệu đầu vào fail
    // message do Joi trả về khi validate
    if (!result.success) {
      return res.status(400).json({
        message: result.message
      })
    }
    res.json({
      message: result.message,
      result
    })
  } catch (error) {
    console.log(error)
  }
}

export const updateUserController = async (req, res) => {
  try {
    const { UserID } = req.params
    console.log(UserID)
    const result = await adminService.updateUser(UserID, req.body)
    // result trả về success "true" nếu thành công và ngược lại trả về false khi validate dữ liệu đầu vào fail
    // message do Joi trả về khi validate
    console.log(result)
    if (!result.success) {
      return res.status(400).json({
        message: result.message
      })
    }
    res.json({
      message: result.message,
      result
    })
  } catch (error) {
    console.log(error)
  }
}

export const updateStatusUserController = async (req, res) => {
  try {
    const { UserID } = req.params
    const result = await adminService.updateStatusUser(UserID)
    // result trả về success "true" nếu thành công và ngược lại trả về false khi validate dữ liệu đầu vào fail
    // message do Joi trả về khi validate
    if (!result.success) {
      return res.status(400).json({
        message: result.message
      })
    }
    res.json({
      message: result.message,
      result
    })
  } catch (error) {
    console.log(error)
  }
}

export const createCategoryController = async (req, res) => {
  try {
    const category = await adminService.addCategory(req.body)
    // nếu tạo thành công category trả về json success: true và ngược lại
    if (!category.success) {
      res.status(400).json({ message: 'Lỗi khi tạo category' })
    }

    res.status(200).json({ message: 'Create Categort Successfully' })
  } catch (error) {
    console.log('Error at create new Category')
  }
}


export const getConsignDetailController = async (req, res) => {
  //tìm user theo username
  const { _id } = req.params
  const consign = await consignsService.getConsignDetail(_id)
  return res.json({
    message: MANAGER_MESSAGES.GET_CONSIGN_DETAIL_SUCCESS,
    result: consign
  })
}
