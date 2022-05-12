const CONFIG = require("../Configurations/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const AuthService = require("../Services/auth");
//const req = require('express/lib/request');
const authService = new AuthService();

module.exports = class AuthController {
  async authUser(req, res, next) {
    
    const result = await authService.authUser(req.body);
    if (!result) return res.status(400).send("Invalid Email");

    const password = await bcrypt.compare(req.body.password, result.password);
    if (!password) return res.status(400).send("Invalid Password");

    const token = jwt.sign({ result}, CONFIG.secretkey,{expiresIn:'3d'});

    res.header('auth-token',token).json({status:"LOGGED IN ",AccessToken:token})
  }

    
};

