import express from 'express'
import { config } from 'dotenv'
import usersRouter from './routes/users.routes.js'
import adminRouter from './routes/admin.routes.js'
import databaseService from './services/database.service.js'
import { defaultErrorHandler } from './middlewares/error.middlewares.js'
import managerRouter from './routes/manager.routes.js'
import { createNewKoiKiGuiController } from './controllers/common.controllers.js'
import cors from 'cors'
config()
const app = express()
app.use(cors(
  {
    origin: 'http://localhost:3000'
  }
))
const PORT = process.env.PORT || 4000
app.use(express.json())
databaseService.connect().then(() => {
  databaseService.indexUsers()
})

app.get('/', (req, res) => {
  res.send('hello world nguyen')
})

app.post('/ki-gui', createNewKoiKiGuiController)

app.use('/users', usersRouter)
app.use('/admins', adminRouter)

app.use('/manager', managerRouter)

app.use(defaultErrorHandler)

app.listen(PORT, () => {
  console.log(`Project này đang chạy trên port ${PORT}`)
})
