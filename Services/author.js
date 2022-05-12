const AuthorModel =require('../Models/author')

const  mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

module.exports = class AuthorService{
    async postAuthor(author){
      const Author = await new AuthorModel(author)
      return Author.save()
    }

    async getAuthor(authorId){
      const Author = await  AuthorModel.findOne({_id:ObjectId(authorId)})
      return Author
    }

    async getAllAuthor(){
      const Author = await  AuthorModel.find().select('-_id -__v')
      return Author
    }

    async updateAuthor(...authorId){
      const [id,body] = authorId
      console.log(body)
      const Author = await AuthorModel.findByIdAndUpdate(id,{$set:body},{new:true})
      return Author
    }

    async deleteAuthor(authorId){
      const Author = await AuthorModel.deleteOne({_id:ObjectId(authorId)})
      return Author
    }
}