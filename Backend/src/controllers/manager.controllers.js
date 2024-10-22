import { MANAGER_MESSAGES } from '../constants/managerMessage.js'
import consignsService from '../services/consigns.services.js'
import groupKoisService from '../services/groupKoi.services.js'
import invoicesService from '../services/invoices.services.js'
import koisService from '../services/kois.services.js'
import suplliersService from '../services/suppliers.services.js'

import usersService from '../services/users.services.js'
import adminService from '../services/admin.service.js'
import databaseService from '../services/database.service.js'
import { ObjectId } from 'mongodb'

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
  try {
    const result = await databaseService.kois.find().toArray()
    const categoryList = await databaseService.category.find().toArray()

    const consigns = await databaseService.consigns.find({ State: 3 }).toArray()
    const consignIds = consigns.map((consign) => new ObjectId(consign.KoiID))
    const filteredResult = result.filter(
      (koi) =>
        (koi.Status === 4 && consignIds.some((id) => id.equals(koi._id))) ||
        koi.Status === 1 ||
        koi.Status === 2 ||
        koi.Status === 3
    )
    console.log(filteredResult)

    res.json({
      result: filteredResult,
      categoryList
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
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

export const getAllSupplierController = async (req, res) => {
  try {
    const result = await suplliersService.getAllSupplier()
    return res.json({
      message: MANAGER_MESSAGES.GET_ALL_SUPPLIER_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const getRevenueController = async (req, res) => {
  try {
    const Orders = await databaseService.order.find({ Status: 2 }).toArray()

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

    return res.json(dailyRevenueArray)
  } catch (error) {
    console.error('Có lỗi xảy ra:', error)
  }
}

export const getProfitController = async (req, res) => {
  try {
    const orders = await databaseService.order.find({ Status: 5 }).toArray()

    if (orders.length > 0) {
      const orderDetailIDs = orders.map((order) => new ObjectId(order.OrderDetailID))
      const orderDetails = await databaseService.orderDetail.find({ _id: { $in: orderDetailIDs } }).toArray()

      if (orderDetails.length > 0) {
        const dailyProfitStats = {} // Đối tượng để lưu lợi nhuận theo từng ngày
        const dailyCostStats = {} // Đối tượng để lưu tổng vốn theo từng ngày

        for (const orderDetail of orderDetails) {
          const items = orderDetail.Items
          const koiID = items.map((item) => new ObjectId(item.KoiID))

          const checkKoi = await databaseService.kois.find({ _id: { $in: koiID } }).toArray()
          if (checkKoi.length > 0) {
            const statuses = checkKoi.map((koi) => koi.Status)
            const koiPrices = checkKoi.map((koi) => koi.TotalPrice) // Lưu giá từ bảng kois

            for (let i = 0; i < statuses.length; i++) {
              const status = statuses[i]
              const orderDate = new Date(orderDetail.OrderDate)
              const formattedDate = `${orderDate.getUTCDate().toString().padStart(2, '0')}/${(orderDate.getUTCMonth() + 1).toString().padStart(2, '0')}/${orderDate.getUTCFullYear()}`

              if (status === 4) {
                const consign = await databaseService.consigns.findOne({ KoiID: koiID[i] })
                if (consign) {
                  dailyProfitStats[formattedDate] =
                    (dailyProfitStats[formattedDate] || 0) + (koiPrices[i] - (consign.TotalPrice || 0))
                }
              } else {
                const invoice = await databaseService.invoice.findOne({ KoiID: koiID[i] })
                if (invoice) {
                  dailyCostStats[formattedDate] = (dailyCostStats[formattedDate] || 0) + (invoice.TotalPrice || 0)
                }
              }
            }
          }
        }

        for (const order of orders) {
          const orderDate = new Date(order.OrderDate)
          const formattedDate = `${orderDate.getUTCDate().toString().padStart(2, '0')}/${(orderDate.getUTCMonth() + 1).toString().padStart(2, '0')}/${orderDate.getUTCFullYear()}`
          const orderDetail = orderDetails.find((detail) => detail._id.equals(order.OrderDetailID))

          if (orderDetail) {
            dailyProfitStats[formattedDate] = (dailyProfitStats[formattedDate] || 0) + orderDetail.TotalPrice
          }
        }

        const finalDailyProfitStats = {}
        for (const date in dailyProfitStats) {
          const totalRevenue = dailyProfitStats[date]
          const totalCost = dailyCostStats[date] || 0 // Nếu không có chi phí thì là 0
          finalDailyProfitStats[date] = totalRevenue - totalCost // Lợi nhuận = Doanh thu - Chi phí
        }

        // Trả về lợi nhuận cho từng ngày
        res.send(finalDailyProfitStats)
      } else {
        res.status(404).json({ message: 'Order Detail not found' })
      }
    } else {
      res.status(404).json({ message: 'Order not found' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'An error occurred', error: error.message })
  }
}

export const updateSupplierController = async (req, res) => {
  //tìm user theo username
  const { _id } = req.params
  const supplier = await suplliersService.updateSupplier(_id, req.body)
  return res.json({
    message: MANAGER_MESSAGES.UPDATE_SUPPLIER_SUCCESS,
    result: supplier
  })
}
export const getSupplierController = async (req, res) => {
  try {
    const { _id } = req.params
    const result = await suplliersService.getSupplier(_id)
    return res.json({
      message: MANAGER_MESSAGES.GET_SUPPLIER_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const createNewInvoiceGroupKoiController = async (req, res) => {
  try {
    const result = await invoicesService.createNewInvoiceGroupKoi(req.body)
    return res.json({
      message: MANAGER_MESSAGES.CREATE_NEW_INVOICE_GROUP_KOI_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const getAllGroupKoiController = async (req, res) => {
  try {
    const groupKoi = await groupKoisService.getAllGroupKoi()
    return res.json({
      message: MANAGER_MESSAGES.GET_ALL_GROUP_KOI_SUCCESS,
      groupKoi
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const getAllInvoiceController = async (req, res) => {
  try {
    const invoices = await invoicesService.getAllInvoice()
    return res.json({
      message: MANAGER_MESSAGES.GET_ALL_INVOICE_SUCCESS,
      invoices
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const getInvoiceController = async (req, res) => {
  try {
    const { _id } = req.params
    const result = await invoicesService.getInvoice(_id)
    return res.json({
      message: MANAGER_MESSAGES.GET_INVOICE_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const getgroupKoiController = async (req, res) => {
  try {
    const { _id } = req.params
    const result = await groupKoisService.getGroupKoi(_id)
    return res.json({
      message: MANAGER_MESSAGES.GET_GROUP_KOI_SUCCESS,
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}



