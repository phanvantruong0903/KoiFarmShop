import express from 'express'
import { config } from 'dotenv'
import usersRouter from './routes/users.routes.js'
import categoryRouter from './routes/category.routes.js'
import databaseService from './services/database.service.js'
import { defaultErrorHandler } from './middlewares/error.middlewares.js'

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
app.use('/users', usersRouter)
app.use('/categories', categoryRouter)

app.use(defaultErrorHandler)

app.listen(PORT, () => {
  console.log(`Project này đang chạy trên port ${PORT}`)
})
