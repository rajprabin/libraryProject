const _ = require('lodash')

const LibraryService = require("../Services/library");
const libraryService = new LibraryService();

module.exports = class LibraryController {
  
//create book
  async postBook(req, res) {
    if(req.isVerified.isAdmin){
     const response =  await libraryService.postBook(req.body);
      res.send({status:'created',description:_.pick(response,['book','author','numberInStock'])});
    }else throw new Error("Acess Denied you are not an ADMIN");
    }
// show avalaible book in library 
    async getAllBook(req, res) {
      if(req.isVerified){
       const result = await libraryService.getAllBook();
      res.send(result);
    }else throw new Error("Acess Denied ");
      }
      
    
//get selected book
  async showBook(req, res) {
    if(req.isVerified){
      const result = await libraryService.showBook(req.params.id);
    res.send(result);
  }else throw new Error("Acess Denied ");
    }
    
//update book
    async updateBook(req, res) {
      if(req.isVerified.isAdmin){
        const result = await libraryService.updateBook(req.params,req.body);
      res.send(result);
    }else throw new Error("Acess Denied You R ! An ADMIN ");
      }

//delete book
      async deleteBook(req, res) {
        if(req.isVerified.isAdmin){
          const result = await libraryService.deleteBook(req.params.id);
        res.send(result);
      }else throw new Error("Acess Denied You R ! An ADMIN ");
        }
};



