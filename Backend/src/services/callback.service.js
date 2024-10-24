import CryptoJS from 'crypto-js'
import databaseService from './database.service.js'
import { ObjectId } from 'mongodb'

export const callback = async (req, res) => {
  let result = {}
  console.log(req.body)
  try {
    const config = {
      app_id: '2554',
      key2: 'trMrHtvjo6myautxDUiAcYsVtaeQ8nhf'
    }

    let dataStr = req.body.data
    let reqMac = req.body.mac

    let mac = CryptoJS.HmacSHA256(dataStr, config.key2).toString()

    // Kiểm tra callback hợp lệ
    if (reqMac !== mac) {
      result.returncode = -1
      result.returnmessage = 'mac not equal'
    } else {
      const parsedData = JSON.parse(dataStr)
      const embedData = JSON.parse(parsedData.embed_data) // Phân tích cú pháp embed_data
      const reqOrderDetails = embedData.orderDetails // Thông tin đơn hàng
      const reqOrder = embedData.order // Thông tin đơn hàng

      console.log('Order details from embed_data:', reqOrderDetails)
      console.log('Order from embed_data:', reqOrder)

      // const koiIDs = reqOrderDetails.Items.map((item) => item.KoiID)

      // for (const koiID of koiIDs) {
      //   await databaseService.kois.findOneAndUpdate(
      //     { _id: new ObjectId(koiID) }, // Tìm kiếm theo _id và trạng thái
      //     { $set: { Status: 0 } }, // Cập nhật trạng thái thành 1
      //     { new: true } // Trả về đối tượng đã cập nhật
      //   )
      // }

      if (!reqOrderDetails) {
        result.returncode = -1
        result.returnmessage = 'No order data found in embed_data'
      } else {
        const result = await saveOrderToDatabase(reqOrderDetails,reqOrder)
        console.log("database value: ", result)

        await databaseService.order.findOneAndUpdate(
          { _id: new ObjectId(OrderID) },
          { $set: { Status: 2 } },
          { new: true }
        )
        if (result.error) {
          result.returncode = -1
          result.returnmessage = result.error
        } else {
          res.clearCookie('order')
          res.clearCookie('orderDT')
          result.returncode = 1
          result.returnmessage = 'success'
        }
      }
    }
  } catch (ex) {
    result.returncode = 0 // ZaloPay server sẽ callback lại (tối đa 3 lần)
    result.returnmessage = ex.message
  }

  res.json(result)
}

export const saveOrderToDatabase = async (reqOrderDetailCookie,reqOrderCookie) => {
  // console.log("Cookies DT received:", reqOrderDTCookie);
  console.log('Cookies received:', reqOrderCookie)
  //check order cookie có exist
  if (!reqOrderDetailCookie || !reqOrderCookie) {
    return { error: 'No order data found in cookies' }
  }

  const newOrderDT = {
    _id: reqOrderDetailCookie._id,
    Items: reqOrderDetailCookie.Items,
    TotalPrice: reqOrderDetailCookie.TotalPrice
  }

  const orderDT = await databaseService.orderDetail.insertOne(newOrderDT)
  if(orderDT.insertedId){
    newOrderDT._id = orderDT.insertedId
  } else {
    return  'Fail to save'
  }

  const newOrder = {
    _id: new ObjectId(),
    UserID: reqOrderCookie.UserID,
    // OrderDetailID: newOrderDT._id,
    OrderDetailID: orderDT?._id,
    ShipAddress: reqOrderCookie.ShipAddress,
    Description: reqOrderCookie.Description,
    OrderDate: reqOrderCookie.OrderDate || new Date(),
    Status: reqOrderCookie.Status || 1
  }

  const order = await databaseService.order.insertOne(newOrder)
  if (order.insertedId) {
    newOrder._id = order.insertedId
  } else {
    return  'Fail to save'
  }
  return {orderDT, order}
}
