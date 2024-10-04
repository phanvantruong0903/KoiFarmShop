import { MANAGER_MESSAGES } from '../constants/managerMessage.js'
import usersService from '../services/users.services.js'

export const getAllUserController = async (req, res) => {
    try {
        const result = await usersService.getAllUser();
        return res.json({
          message: MANAGER_MESSAGES.GET_ALL_USERS_SUCCESS,
          result
        });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
}
