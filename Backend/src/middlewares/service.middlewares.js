import Joi from 'joi'

export const serviceValidate = (data) => {
  const serviceSchema = Joi.object({
    ServiceName: Joi.string().required(),
    ServiceImage: Joi.string().required(),
    Price: Joi.number().min(1).max(10000000).required(),
    Description: Joi.string().max(128).optional(),
  })

  return serviceSchema.validate(data)
}
