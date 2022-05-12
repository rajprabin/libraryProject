const joi = require('joi')
joi.objectId = require('joi-objectid')(joi)
exports.create = (req,res,next)=> {
    const schema = joi.object({
        name:joi
        .string()
        .min(3)
        .max(255),
        author:joi
        .objectId()
        .required(),
        numberOfPages:joi
        .number()
        .required(),
        summary:joi
        .string()
        .required(),
        numberInStock:joi
        .number()
        .required()
    })
    const {error} = schema.validate(req.body)
    
        if(error) next(new Error(error.details[0].message))
        
        else next()
}
