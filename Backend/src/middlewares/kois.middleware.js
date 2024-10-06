import Joi from 'joi'

export const koiValidate = (data) => {
  const fishSchema = Joi.object({
    CategoryID: Joi.string().required(),
    KoiName: Joi.string().required().min(3).max(50),
    Breed: Joi.string().min(3).max(20).required(),
    Origin: Joi.string().required(),
    Age: Joi.number().required(),
    Gender: Joi.string().required(),
    Size: Joi.number().greater(10).less(100),
    Description: Joi.string().max(128),
    DailyFoodAmount: Joi.number().positive(),
    FilteringRatio: Joi.number().required(),
    CertificateID: Joi.string().optional(),
    Image: Joi.string().optional(),
    Video: Joi.string().optional(),
    Price: Joi.number().positive().required()
  })

  return fishSchema.validate(data)
}
