const joi = require('joi')
joi.objectId = require('joi-objectid')(joi)

module.exports = (req,res,next)=>{
    const librarySchema =joi.object({
        book:joi
        .objectId()
        .required(),
        author:joi
        .objectId()
        .required(),
        numberInStock:joi
        .number()
        .when('book',{then:joi.required()}),
        
    })
    
    const {error}= librarySchema.validate(req.body)
    if(error) next(new Error (error.details[0].message))
        
    else next()
   
}
