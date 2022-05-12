const Async = require("../Middlewares/Async");
const validator = require("../Middlewares/Validations/auth");

const AuthController = require("../Controllers/auth");
const authController = new AuthController();

const express = require("express");
const router = express.Router();

router.post("/", validator, Async(authController.authUser));

module.exports = router;
