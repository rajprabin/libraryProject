const _ = require("lodash");

const BookService = require("../Services/book");
const bookService = new BookService();

module.exports = class BookController {
  async postBook(req, res) {
    const isAdmin = req.isVerified;
    if (isAdmin) {
      const book = await bookService.postBook(req.body);
      res.send({created:book});
    }
  }
  // for selected book
  async getBook(req, res) {
    if (req.isVerified) {
      const result = await bookService.getBook(req.params.bookname);
      res.send({book:result});
    }
  }

  //show all books
  async getAllBook(req, res) {
    const isAdmin = req.isVerified.isAdmin;
    if (isAdmin) {
      const response = await bookService.getAllBook();

      res.send(
        _.pick(
          response,
          "name",
          "author",
          "numberOfPages",
          "summary",
          "numberInStock"
        )
      );
    } else throw new Error("Acess Denied");
  }
  //update book
  async updateBook(req, res) {
    const isAdmin = req.isVerified.isAdmin;
    if (isAdmin) {
      const response = await bookService.updateBook(req.params.id, req.body);
      res.send({
        updated: _.pick(
          response,
          "name",
          "author",
          "numberOfPages",
          "summary",
          "numberInStock"
        ),
      });
    }else throw new Error('Acess Denied')
  }
  //delete book
  async deleteBook(req, res) {
    const isAdmin = req.isVerified.isAdmin;
    if (isAdmin) {
      const response = await bookService.deleteBook(req.params.id);
      res.send({ deleted: response });
    } else throw new Error("Acess Denied");
  }
};
