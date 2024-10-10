import { MESSAGES } from '../constants/message.js'
import koisService from '../services/kois.services.js'
import databaseService from '../services/database.service.js'

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

export const getCategory = async (req,res)=>{
  try {
    const category = await databaseService._db.collection(process.env.DB_CATEGORY_COLLECTION).find().toArray()
    res.json({
      categoryList: category
    })
  } catch (error) {
    console.error('Lỗi khi lấy danh sách category:', error)
    res.status(500).json({ message: 'Lỗi khi lấy danh sách category' })
  }
}
