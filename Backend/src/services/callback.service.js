import CryptoJS from 'crypto-js'
import databaseService from './database.service.js'
import { ObjectId } from 'mongodb'; 

export const callback = async (req, res) => {
  let result = {}
  console.log(req.body)
  try {
    const config = {
      app_id: '2554',
      key2: 'trMrHtvjo6myautxDUiAcYsVtaeQ8nhf',
    }

    let dataStr = req.body.data
    let reqMac = req.body.mac

    let mac = CryptoJS.HmacSHA256(dataStr, config.key2).toString()

    // kiểm tra callback hợp lệ (đến từ ZaloPay server)
    if (reqMac !== mac) {
      // callback không hợp lệ
      result.returncode = -1
      result.returnmessage = 'mac not equal'
    } else {
      let dataJson = JSON.parse(dataStr, config.key2);

      const embedData = JSON.parse(dataJson.embed_data); 
      const OrderID = embedData.OrderID; 

      await databaseService.order.findOneAndUpdate(
        { _id: new ObjectId(OrderID) },
        { $set: { Status: 5 } },
        { new: true }
      );

      result.returncode = 1
      result.returnmessage = 'success'
    }
  } catch (ex) {
    result.returncode = 0 // ZaloPay server sẽ callback lại (tối đa 3 lần)
    result.returnmessage = ex.message
  }

  res.json(result)
}
