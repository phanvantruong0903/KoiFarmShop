import express from 'express'
import { config } from 'dotenv'
import usersRouter from './routes/users.routes.js'
import databaseService from './services/database.service.js'
import { defaultErrorHandler } from './middlewares/error.middlewares.js'
import managerRouter from './routes/manager.routes.js'
import { createNewKoiKiGuiController } from './controllers/common.controllers.js'
import { createNewKoiKiGuiValidator } from './middlewares/common.middlewares.js'
import { wrapAsync } from './utils/handle.js'

config()
const app = express()

const PORT = process.env.PORT || 4000
app.use(express.json())
databaseService.connect().then(() => {
  databaseService.indexUsers()
})

app.get('/', (req, res) => {
  res.send('hello world nguyen')
})

app.post('/ki-gui', createNewKoiKiGuiValidator, wrapAsync(createNewKoiKiGuiController))

app.use('/users', usersRouter)

app.use('/manager', managerRouter)

app.use(defaultErrorHandler)

app.listen(PORT, () => {
  console.log(`Project này đang chạy trên port ${PORT}`)
})
