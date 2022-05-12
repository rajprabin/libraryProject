
const UserModel = require('../Models/user')

module.exports = class AuthService{
  
       async authUser(user){
             return await UserModel.findOne({email:user.email})
            //  if(!User) throw new Error('Email Not Exist')

            //  else return User

        }
      
    }