import express from 'express'
import { config } from 'dotenv'
import usersRouter from './routes/users.routes.js'
import databaseService from './services/database.service.js'
import { defaultErrorHandler } from './middlewares/error.middlewares.js'
import cookieParser from 'cookie-parser'

import cors from 'cors' // Thêm import cho cors

import managerRouter from './routes/manager.routes.js'
import { authorizationController, createNewKoiKiGuiController, getCategory } from './controllers/common.controllers.js'
import { getKoiByCategoryIDController } from './controllers/home.controllers.js'

import { createNewKoiKiGuiValidator } from './middlewares/common.middlewares.js'
import { wrapAsync } from './utils/handle.js'

import { getKois } from './controllers/admin.controllers.js'
import { accessTokenValidator } from './middlewares/users.middlewares.js'
import paymentRouter from './routes/payments.routes.js'

config()
const app = express()
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
)
const PORT = process.env.PORT || 4000
app.use(cookieParser())
app.use(express.json())
databaseService.connect().then(() => {
  databaseService.indexUsers()
})

app.get('/', (req, res) => {
  res.send('hello world nguyen')
})

app.post('/ki-gui', createNewKoiKiGuiValidator, wrapAsync(createNewKoiKiGuiController))

app.use('/users', usersRouter)
app.get('/categories/getCategory', getCategory)

app.use('/manager', managerRouter)
app.use('/kois/:CategoryID', getKoiByCategoryIDController)
app.use('/getAllKoi', getKois)

app.post('/authorization', accessTokenValidator, authorizationController)

app.use('/payment',paymentRouter)

app.use(defaultErrorHandler)

app.listen(PORT, () => {
  console.log(`Project này đang chạy trên port ${PORT}`)
})
