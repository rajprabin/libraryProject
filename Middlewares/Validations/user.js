const joi = require('joi')
module.exports =(req,res,next) =>{
    const Schema = joi.object({
        name:joi
        .string()
        .regex(new RegExp('[a-z A-z]{3,}'))
        .required()
        .uppercase(),
        email:joi
        .string()         //any character and one spl character 
        .regex(new RegExp('^[a-z A-z 0-9 _ /-/. ]+[@][a-z]{3,6}[/.][a-z]{2,4}$'))
        .email()
        .min(3)
        .required(),
        password:joi
        .string()            // 1 capital chars 1 small chars 1 spl chars any num
        .regex((new RegExp('^[A-Z]+[a-z]+[@][0-9]{1,}$')))
        .min(3)
        .required()

    })
    const{error,value} = Schema.validate(req.body)
    req.body = value
    if(error) next(new Error(error.details[0].message))
        
    else next()
   
}
