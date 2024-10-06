import { Schema, model } from 'mongoose';

const fishSchema = new Schema(
  {
    CategoryID: { type: String, required: true },
    KoiName: { type: String, required: true },
    Breed: { type: String, required: true },
    Origin: { type: String, required: true },
    Age: { type: Number, required: true },
    Gender: { type: String, required: true }, // sửa 'require' thành 'required'
    Size: { type: Number, required: true },
    Description: { type: String, required: true },
    DailyFoodAmount: { type: String, required: true },
    FilteringRadio: { type: String, required: true },
    CertificateID: { type: String },
    Image: { type: String },
    Video: { type: String },
    Status: { type: Number, required: true, default: 0 },
    Price: { type: Number, required: true }
  },
  {
    collection: 'kois',
    timestamps: true
  }
);

export default model('kois', fishSchema);
