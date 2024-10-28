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

    const orderDetailIds = Orders.map((order) => new ObjectId(order.OrderDetailID))

    const OrderDetails = await databaseService.orderDetail
      .find({
        _id: { $in: orderDetailIds }
      })
      .toArray()

    console.log(OrderDetails)

    const dailyRevenue = Orders.reduce((accumulator, order) => {
      const orderDate = new Date(order.OrderDate).toISOString().split('T')[0]
      const detail = OrderDetails.find((d) => d._id.equals(new ObjectId(order.OrderDetailID)))
      const orderTotal = detail ? detail.TotalPrice : 0

      if (accumulator[orderDate]) {
        accumulator[orderDate] += orderTotal
      } else {
        accumulator[orderDate] = orderTotal
      }

      return accumulator
    }, {})

    const dailyRevenueArray = Object.entries(dailyRevenue).map(([Date, TotalPrice]) => ({
      Date,
      TotalPrice
    }))

    console.log(dailyRevenueArray)

    return res.json(dailyRevenueArray)
  } catch (error) {
    console.error('Có lỗi xảy ra:', error)
  }
}

export const getProfitController = async (req, res) => {
  try {
    const Orders = await databaseService.order.find({ Status: 2 }).toArray()
    if (Orders.length === 0) {
      return res.json('order rỗng' + [])
    }

    const orderDetailIds = Orders.map((order) => {
      if (order.OrderDetailID && ObjectId.isValid(order.OrderDetailID)) {
        return new ObjectId(order.OrderDetailID)
      } else {
        console.log(`Invalid OrderDetailID: ${order.OrderDetailID}`)
        return null
      }
    }).filter((id) => id !== null)

    const OrderDetails = await databaseService.orderDetail
      .find({
        _id: { $in: orderDetailIds }
      })
      .toArray()
    if (OrderDetails.length === 0) {
      return res.json('orderDetail rỗng' + [])
    }

    console.log(OrderDetails)

    // Lấy tất cả các KoiID từ tất cả các đối tượng trong Items
    const koiIds = OrderDetails.flatMap((detail) =>
      detail.Items.map((item) => {
        if (item.KoiID && ObjectId.isValid(item.KoiID)) {
          return new ObjectId(item.KoiID)
        } else {
          console.log(`Invalid KoiID: ${item.KoiID}`)
          return null
        }
      })
    ).filter((id) => id !== null)

    console.log(koiIds)

    // Kiểm tra dữ liệu trong cơ sở dữ liệu
    const Kois = await databaseService.kois
      .find({
        _id: { $in: koiIds },
        Status: 0
      })
      .toArray()
    if (Kois.length === 0) {
      console.log('Koi rỗng', koiIds)
      return res.json('Koi rỗng' + [])
    }

    console.log(Kois)

    // Kiểm tra và chuyển đổi GroupKoiID
    const groupKoiIds = Kois.map((koi) => {
      if (koi.GroupKoiID && typeof koi.GroupKoiID === 'string' && ObjectId.isValid(koi.GroupKoiID)) {
        return new ObjectId(koi.GroupKoiID)
      } else {
        console.log(`Invalid GroupKoiID: ${koi.GroupKoiID}`)
        return null
      }
    }).filter((id) => id !== null)

    const GroupKois = await databaseService.groupKois
      .find({
        _id: { $in: groupKoiIds }
      })
      .toArray()

    console.log(GroupKois)

    // Kiểm tra và chuyển đổi ConsignID
    // const consignIds = Kois.map((koi) => {
    //   if (koi.ConsignID && typeof koi.ConsignID === 'string' && ObjectId.isValid(koi.ConsignID)) {
    //     return new ObjectId(koi.ConsignID)
    //   } else {
    //     console.log(`Invalid ConsignID: ${koi.ConsignID}`)
    //     return null
    //   }
    // }).filter((id) => id !== null)

    const koiIdssss = Kois.map((koi) => koi._id.toString())

    console.log(koiIdssss)

    const consignIds = await databaseService.consigns
      .find({
        KoiID: { $in: koiIdssss }
      })
      .toArray()

    console.log(consignIds)

    const Consigns = await databaseService.consigns
      .find({
        _id: { $in: consignIds }
      })
      .toArray()

    console.log(Consigns)

    // Tính lợi nhuận từ mỗi đơn hàng, đang tới đây 14:00 ngày 28/10/2024
    const calculateProfit = (koi, detail) => {
      if (koi.GroupKoiID) {
        const groupKoi = GroupKois.find((gk) => gk._id.equals(koi.GroupKoiID))
        return (groupKoi ? groupKoi.PriceOneKoi : 0) - detail.Price
      } else if (koi.Breed === 'Viet' || koi.Breed === 'F1') {
        return detail.Price
      } else if (koi._id) {
        const consign = Consigns.find((c) => c.KoiID.equals(koi._id))
        return detail.Price - (consign ? consign.TotalPrice : 0)
      } else {
        return 1000
      }
    }

    const dailyProfit = Orders.reduce((accumulator, order) => {
      const orderDate = new Date(order.OrderDate).toISOString().split('T')[0]
      const detail = OrderDetails.find((d) => d._id.equals(new ObjectId(order.OrderDetailID)))
      if (!detail) {
        console.log(`OrderDetail not found for OrderDetailID: ${order.OrderDetailID}`)
        return accumulator
      }
      const koi = Kois.find((k) => k._id.equals(new ObjectId(detail.Items[0].KoiID))) // Lấy KoiID từ Items
      if (!koi) {
        console.log(`Koi not found for KoiID: ${detail.Items[0].KoiID}`)
        return accumulator
      }
      const profit = calculateProfit(koi, detail)

      if (accumulator[orderDate]) {
        accumulator[orderDate] += profit
      } else {
        accumulator[orderDate] = profit
      }

      return accumulator
    }, {})

    const dailyProfitArray = Object.entries(dailyProfit).map(([Date, TotalProfit]) => ({
      Date,
      TotalProfit
    }))

    console.log(dailyProfitArray)

    return res.json(dailyProfitArray)
  } catch (error) {
    console.error('Có lỗi xảy ra:', error)
    return res.status(500).json({ error: error.message })
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
