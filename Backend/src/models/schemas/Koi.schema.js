import { ObjectId } from 'mongodb'

export default class KoiSchema {
  _id = new ObjectId()
  CategoryID = ''
  KoiName = ''
  Age = ''
  Origin = ''
  Gender = ''
  Size = ''
  Breed = ''
  Description = ''
  DailyFoodAmount = ''
  FilteringRatio = ''
  Status = ''
  CertificateID = ''
  Price = ''
  Image = ''
  Video = ''

  constructor(koi) {
    this._id = koi?._id ?? new ObjectId() // tự tạo id
    this.CategoryID = koi.CategoryID || ''
    this.KoiName = koi.KoiName || ''
    this.Age = koi.Age || ''
    this.Origin = koi.Origin || ''
    this.Gender = koi.Gender || ''
    this.Size = koi.Size || ''
    this.Breed = koi.Breed || ''
    this.Description = koi.Description || ''
    this.DailyFoodAmount = koi.DailyFoodAmount || ''
    this.FilteringRatio = koi.FilteringRatio || ''
    this.Status = koi.Status || 1 // 1: nhập khẩu, 2: f1, 3: việt, 4: kí gửi, 0 là hết
    this.CertificateID = koi.CertificateID || '' // nếu koi  k có Certificate
    this.Price = koi.Price || '' // nếu koi chưa biết giá thì để liên hệ
    this.Image = koi.Image || '' // nếu koi chưa có ảnh thì để rỗng
    this.Video = koi.Video || '' // nếu koi chưa có video thì để rỗng
  }
}
