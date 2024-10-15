import { MANAGER_MESSAGES } from '../constants/managerMessage.js'
import consignsService from '../services/consigns.services.js'
import koisService from '../services/kois.services.js'
import suplliersService from '../services/suppliers.services.js'

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
  const result = await adminService.getKoi()
  const cateogryList = await databaseService.category.find().toArray()
  res.json({
    result,
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
      return res.status(400).json({ message: 'Lỗi khi tạo category' })
    }

    return res.status(200).json({ message: 'Create Categort Successfully' })
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

export const updateConsignDetailController = async (req, res) => {
  //tìm user theo username
  const { _id } = req.params
  const consign = await consignsService.updateConsignDetail(_id, req.body)
  return res.json({
    message: MANAGER_MESSAGES.UPDATE_CONSIGN_DETAIL_SUCCESS,
    result: consign
  })
}
export const createNewServiceController = async (req, res) => {
  try {
    const newService = await adminService.createNewService(req.body)
    if (!newService.success) {
      return res.status(400).json({ message: newService.message })
    }

    return res.status(200).json({ message: newService.message })
  } catch (error) {
    console.log(error + 'Error at create new Category')
  }
}

export const updateServiceController = async (req, res) => {
  const { ServiceID } = req.params
  const Service = await adminService.updateService(ServiceID, req.body)
  if (!Service.success) {
    return res.status(400).json({ message: Service.message })
  }

  return res.status(200).json({ message: Service.message })
}

export const updateOrderStatusController = async (req, res) => {
  const { OrderID } = req.params
  const Order = await adminService.updateOrderStatus(OrderID)
  if (!Order.success) {
    return res.status(400).json({ message: Order.message })
  }

  return res.status(200).json({ message: Order.message })
}
export const createNewSupplierController = async (req, res) => {
  try {
    const result = await suplliersService.createNewSupplier(req.body)
    return res.json({
      message: MANAGER_MESSAGES.CREATE_NEW_SUPPLIER_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const getRevenueController = async (req, res) => {
  try {
    const Orders = await databaseService.order.find({ Status: 5 }).toArray()
    console.log(Orders)

    const dailyRevenue = Orders.reduce((accumulator, order) => {
      const orderDate = new Date(order.OrderDate).toISOString().split('T')[0] // ví dụ OrderDate trong db là 2024-10-13T07:40:36.198+00:00 thì tách chữ T ra 
      const amount = order.TotalPrice || 0 

      if (accumulator[orderDate]) {
        accumulator[orderDate] += amount
      } else {
        accumulator[orderDate] = amount
      }

      return accumulator // return về các object chứa 2 field là date và total price
    }, {}) // truyền đối số ini cho accumulator là 1 object rỗng

    const dailyRevenueArray = Object.entries(dailyRevenue).map(([Date, TotalPrice]) => ({
      Date,
      TotalPrice
    }))

    return res.json(dailyRevenueArray);
  } catch (error) {
    console.error('Có lỗi xảy ra:', error)
  }
}

export const getRevenueByMonthController = async (req, res) => {}

