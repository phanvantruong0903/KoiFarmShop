import databaseService from '../services/database.service.js'

export const getKoiByCategoryIDController = async (req, res) => {
  try {
    const { CategoryID } = req.params
    const result = await databaseService.kois.find({ CategoryID: CategoryID }).toArray()

    if (result.length === 0) {
      console.log('khong tim duoc')
    }

    return res.json({
      result
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

