import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGODB: Joi.required(),
  PORT: Joi.required().default(3000),
  DEFAULT_LIMIT: Joi.required().default(7),
});
