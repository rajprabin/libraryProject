const _ = require('lodash');
const { response } = require('../Routes/book');

const AuthorService = require("../Services/author");
const authorService = new AuthorService();

module.exports = class AuthorController {
  async postAuthor(req, res) {
    const isAdmin = req.isVerified.isAdmin;
    if (isAdmin){
      req.body = _.pick(req.body,['name','country','age','dateOfBirth'])
    const response =   await authorService.postAuthor(req.body);
      res.send({"created":response});
    }
   
  }

  async getAuthor(req, res) {
    if( req.isVerified){
      const result = await authorService.getAuthor(req.params.id);
      if(!result){
        res.status(404).send('Not Found')
      }
      else
      res.send(result)
    }
    }

    async getAllAuthor(req, res) {
      if( req.isVerified.isAdmin){
        const result = await authorService.getAllAuthor();
        if(!result){
          res.status(404).send('Not Found')
        }
        else
        res.send(result)
      }
      }
    
  
  async updateAuthor(req, res) {
      if( req.isVerified.isAdmin){ 
        const result = await authorService.updateAuthor(req.params.id,req.body);
        if(!result){
          res.status(404).send('Not Found')
        }
        else
        res.send(result);
      }
   

  }

  async deleteAuthor(req, res) {
    if( req.isVerified.isAdmin){ 
      const result = await authorService.deleteAuthor(req.params.id);
    
    res.json({
      descrition:"deleted",
      message:"success"
    });
    }
    
  }
};
