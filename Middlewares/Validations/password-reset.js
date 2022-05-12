const joi = require("joi");

module.exports = (req, res, next) => {
  const Schema = joi.object({
    password:joi
        .string()
        .regex((new RegExp('^[A-Z]*[a-z]+[@][0-9]{1,}$')))
        .min(3)
        .required(),
    repeatPassword:joi.any().valid(joi.ref('password')).required()
  });
  const { error, value } = Schema.validate(req.body);

  if (error) next(new Error(error.details[0].message));
  else next();
};
