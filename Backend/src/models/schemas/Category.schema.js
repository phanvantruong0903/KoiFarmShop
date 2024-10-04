import { Schema, model } from 'mongoose';

const categorySchema = new Schema(
  {
    CategoryID: { type: Number, required: true, unique: true },
    CategoryName: { type: String, required: true },
    Description: { type: String, required: true }
  },
  {
    collection: "Category",
    timestamps: true,
  }
);

categorySchema.pre('save', async function (next) {
  if (this.isNew) {
    const lastCategory = await this.constructor.findOne().sort({ categoryId: -1 });
    this.categoryId = lastCategory ? lastCategory.categoryId + 1 : 1;
  }
  next(); 
});

export default model("Category", categorySchema);
