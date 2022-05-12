const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 255,
    required: "name",
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "Author",
    required: "author",
  },
  numberOfPages: {
    type: Number,
    required: "numberOfPages",
  },
  summary: {
    type: String,
    required: "summmary",
  },
  numberInStock: {
    type: Number,
    required: "numberInStock",
  },
},{timestamps:true});

module.exports = mongoose.model("Book", bookSchema);
