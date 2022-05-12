
const mongoose = require('mongoose')

librarySchema =new mongoose.Schema({
   
    book:{
        type:mongoose.Types.ObjectId,
        ref:'Book'
    },
    author:{
        type:mongoose.Types.ObjectId,
        ref:'Author'
    },
    numberInStock:{
        type:Number,
        required:true
    },
        
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('Library',librarySchema)