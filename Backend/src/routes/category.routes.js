import { Router } from 'express'
const categoryRouter = Router();

import categoryController from '../controllers/categories.controller.js'

categoryRouter.get("/getCategory",categoryController.getCategory)

export default categoryRouter