const mongoose = require("mongoose");
const UserModel = require("../Models/user");
const BookModel = require("../Models/book");

module.exports = class BookService {
  //create book
  async postBook(book) {
    const Book = await new BookModel(book);
    return Book.save();
  }
  //selected book
  async getBook(book) {
    const Book = await BookModel.findOne({ name: book })
      .populate("author", "-_id -__v")
      .select(" -_id -__v");
    if (!Book) throw new Error("Book Not Found");

    return Book;
  }
  //get all book
  async getAllBook() {
    return await BookModel.find().sort({name:1});
  }
  //update book
  async updateBook(...book) {
    const [id,body] = book
    const Book =  await BookModel.findByIdAndUpdate(id,{$set:body},{new:true})
    if(!book) throw new Error("Book Not Found")
    return Book
  }
  //delete book
  async deleteBook(id) {
    const book =  await BookModel.findByIdAndDelete(id)
    if (!book)  throw new Error("Book Not Found") 
    return book
  }
};
