
const  mongoose  = require("mongoose");


const authorSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:2,
        maxlength:50,
        required:'name'
    },
    country:{
        type:String,
        minlength:2,
        maxlength:50,
        required:'enter the country'
    },
    age:{
        type:Number,
        required:'dateOfBirth'
    },
    dateOfBirth:{
        type:Date,
        required:'dateOfBirth'
    }
                              

})

module.exports=mongoose.model('Author',authorSchema)

