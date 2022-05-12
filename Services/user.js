const LibraryModel = require("../Models/library")
const UserModel = require('../Models/user')
const mongoose =require('mongoose')

module.exports = class UserService{
//REGISTERING
    async registerUser(user){
      const emailExist = await UserModel.findOne({email:user.email})
      if(emailExist) throw new Error("Email Already Exit")
      
      const User =new UserModel(user)

      return await User.save()
    }

    async getUser(userId) {
      const user = await UserModel.findOne({_id:mongoose.Types.ObjectId(userId)})
      if(!user) throw new Error ('User Not Found')
        return user
    }  

    async getAllUser() {
     
      const user = await UserModel.find({}).select('name role email -_id')
        return user
    }  

    async updateUser(...userId){
      const user = await UserModel.findByIdAndUpdate(userId[0].id,{$set:userId[1]},{new :true})
      if(!user) throw new Error ('User Not Found')
      return user

    }

    async deleteUser(userId){
      
     const user = await UserModel.deleteOne({_id:mongoose.Types.ObjectId(userId.id)})

     if(!user) throw new Error ('User Not Found')

     return true

    }
    
}