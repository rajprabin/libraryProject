const joi = require("joi");
module.exports = (req, res, next) => {
  const Schema = joi.object({
    email: joi
      .string()                 //any character and one spl character 
      .regex(new RegExp("^[a-z A-z 0-9 _ /-/. ]*[@][a-z]{3,6}[/.][a-z]{2,4}$"))
      .email()
      .min(3)
      .required(),
    password: joi.string().min(3).required(),
  });
  const { error, value } = Schema.validate(req.body);

  if (error) next(new Error(error.details[0].message));
  else next();
};
