import { Collection, MongoClient, ServerApiVersion } from 'mongodb'
import { config } from 'dotenv'

config()

const uri =
  'mongodb+srv://zunguyen1505:boyboyboy@koifarmshop.0shkn.mongodb.net/?retryWrites=true&w=majority&appName=KoiFarmShop'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
class DatabaseService {
  _client
  _db
  constructor() {
    this._client = new MongoClient(uri)
    this._db = this._client.db(process.env.DB_NAME)
  }
  async connect() {
    try {
      await this._db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  get users() {
    try {
      // const users = this._db.collection(process.env.DB_USERS_COLLECTION)
      return this._db.collection(process.env.DB_USERS_COLLECTION)
      //vào db lấy ra collection users, và vì chuỗi truyền vào có thể là undefined nên mình phải rằng buộc nó là string 'thử xóa as string để thấy lỗi'
    } catch (error) {
      console.log(error + 'lỗi ở database service - get users')
      throw error
    }
  }
  get order() {
    try {
      return this._db.collection('Order')
    } catch (error) {
      console.log(error + 'lỗi ở database service - get orders')
      throw error
    }
  }
  get orderDetail() {
    try {
      return this._db.collection('orderDetail')
    } catch (error) {
      console.log(error + 'lỗi ở database service - get orderDetail')
      throw error
    }
  }
  get kois() {
    try {
      return this._db.collection('kois')
    } catch (error) {
      console.log(error + 'lỗi ở database service - get kois')
      throw error
    }
  }

  async indexUsers() {
    await this.users.createIndex({ email: 1 }, { unique: true }) //register
    await this.users.createIndex({ username: 1 }, { unique: true }) //getProfile
  }

  get refreshTokens() {
    try {
      return this._db.collection(process.env.DB_REFRESH_TOKENS_COLLECTION)
    } catch (error) {
      console.log(error + 'lỗi ở database service - get refresh token')
    }
  }

  get category() {
    try {
      return this._db.collection(process.env.DB_CATEGORY_COLLECTION)
    } catch (error) {
      console.log(error + 'lỗi ở database service - get category')
    }
  }

  // get followers(): Collection<Follower> {
  //   return this.db.collection(process.env.DB_FOLLOWERS_COLLECTION as string)
  // }

  get kois() {
    try {
      return this._db.collection(process.env.DB_KOIS_COLLECTION)
    } catch (error) {
      console.log(error + 'lỗi ở database service - get kois')
    }
  }

  get consigns() {
    try {
      return this._db.collection(process.env.DB_CONSIGNS_COLLECTION)
    } catch (error) {
      console.log(error + 'lỗi ở database service - get consigns')
    }
  }

  get services() {
    try {
      return this._db.collection(process.env.DB_SERVICES_COLLECTION)
    } catch (error) {
      console.log(error + 'lỗi ở database service - get services')
    }
  }
}

const databaseService = new DatabaseService()
export default databaseService
