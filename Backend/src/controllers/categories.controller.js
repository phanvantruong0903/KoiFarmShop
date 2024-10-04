import databaseService from '../services/database.service.js'; 
import _category from '../models/schemas/Category.schema.js';

const categoryController = {
  getCategory: async (req, res) => {
    try {
      const category = await databaseService._db.collection(process.env.DB_CATEGORY_COLLECTION).find().toArray();
      res.json({
        categoryList: category
      });
    } catch (error) {
      console.error('Lỗi khi lấy danh sách category:', error);
      res.status(500).json({ message: 'Lỗi khi lấy danh sách category' });
    }
  }
};

export default categoryController;
