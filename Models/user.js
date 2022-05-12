const mongoose = require('mongoose')

const UserModel = mongoose.model('User',new mongoose.Schema({
    name:{
        type:String,
        minlenght:3,
        maxlength:255,
        required:true
    },
    role:{
        type:String,
        enum:['member','student'],
        default:'student'
    }
    ,
    email:{
        type:String,
        unique:true,
        minlenght:5,
        maxlength:255,
        required:true
    },
    password:{
        type:String,
        minlenght:5,
        maxlength:1024,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false


    }
},{timestamps:true}))

module.exports = UserModel