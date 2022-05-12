const joi = require('joi')
joi.objectId = require('joi-objectid')(joi)
module.exports = (req,res,next)=> {
    const schema = joi.object({
        name:joi.string(),
        country:joi.string().allow(''),
        age:joi.string(),
        dateOfBirth:joi.date()//.max('1-1-2012').iso()
    
    })
    const {error} = schema.validate(req.body)

    if(error) next(new Error(error.details[0].message))

    else next()
    
}


