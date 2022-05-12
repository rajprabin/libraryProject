const cors = require('cors')
const morgan = require('morgan')
const helmet =require('helmet')
const CONFIG = require("./Configurations/config");
const mongoose = require("mongoose");


const password_reset = require("./Routes/password_reset");
const book = require("./Routes/book");
const author = require("./Routes/author");
const library = require("./Routes/library");
const auth = require("./Routes/auth");
const user = require("./Routes/user");
const error = require("./Middlewares/error");

const express = require("express");
const app = express();

// middleware
app.use(morgan('tiny'))
app.use(helmet())
app.use(cors({
  origin:'*'
}))
//routes
app.use(express.json());
app.use("/api/password-reset", password_reset);
app.use("/api/author", author);
app.use("/api/book", book);
app.use("/api/library", library);
app.use("/api/auth", auth);
app.use("/api/user", user);
app.use(error);

//connection

mongoose
  .connect(CONFIG.uri)
  .then(() => {
    console.log("DB connected........");
    app.listen(CONFIG.port, () => {
      console.log(`The server is listening...http://localhost:${CONFIG.port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
