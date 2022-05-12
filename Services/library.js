const LibraryModel = require("../Models/library");
const mongoose = require("mongoose");

module.exports = class LibraryService {
  // to create book

  async postBook(Book) {
    const book = await new LibraryModel(Book);
    return book.save();
  }

  // show avalaible in library
  async getAllBook() {
    return await LibraryModel.find()
      .populate("book", "-_id -__v")
      .populate("author", "-_id -__v -age -dateOfBirth");
  }

  //show selected book
  async showBook(bookId) {
    const data = await LibraryModel.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(bookId) },
      },

      {
        $lookup: {
          from: "books",
          localField: "book",
          foreignField: "_id",
          as: "book",
        },
      },
      {
        $unwind: "$book",
      },
      {
        $lookup: {
          from: "authors",
          localField: "author",
          foreignField: "_id",
          as: "author",
        },
      },
      {
        $unwind: "$author",
      },
      {
        $project: {
          _id: 0,
          __v: 0,
          author: {
            _id: 0,
            __v: 0,
            age:0
          },
          book: {
            _id: 0,
            __v: 0,
          },
        },
      },
    ]);
    return data[0];
  }

  async updateBook(...Book) {
    const [id, body] = Book;
    const book = await LibraryModel.findByIdAndUpdate(
       mongoose.Types.ObjectId(id),
      { $set: body },
      { new: true }
    );
    if (!book) return new Error("book not found");
    return book
  }

  async deleteBook(bookId) {
    const book = await LibraryModel.findByIdAndDelete(bookId);
    if (!book) return new Error("book not found");
    return book;
  }
};
