import { ObjectId } from 'mongodb'
import { UserVerifyStatus } from '../../constants/enums.js'

export default class UserSchema {
  _id = new ObjectId()
  email = ''
  password = ''
  email_verify_token = ''
  forgot_password_token = ''
  verify = UserVerifyStatus.Unverified
  website = ''
  username = ''
  picture = ''
  created_at = new Date()
  updated_at = new Date()
  roleid = 1
  name = ''
  address = ''
  phone_number = ''
  constructor(user) {
    const date = new Date() //tạo này cho ngày created_at updated_at bằng nhau
    this._id = user?._id ?? new ObjectId() // tự tạo id
    this.email = user.email
    this.password = user.password
    this.email_verify_token = user.email_verify_token || ''
    this.forgot_password_token = user.forgot_password_token || ''
    this.verify = user.verify || UserVerifyStatus.Unverified
    this.website = user.website || ''
    this.username = user.username || ''
    this.picture = user.picture || ''
    this.created_at = user.created_at || date
    this.updated_at = user.updated_at || date
    this.roleid = 1
    this.name = user.name || '' // nếu người dùng tạo mà k truyền ta sẽ để rỗng
    this.address = user.address || ''
    this.phone_number = user.phone_number || ''
  }
}
