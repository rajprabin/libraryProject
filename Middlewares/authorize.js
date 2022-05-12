CONFIG = require("../Configurations/config");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("auth-token");

  const payload = jwt.verify(token, CONFIG.secretkey);
  if (!payload) throw new Error("Acess Denied");
  else {
    req.isVerified = payload.result;
    //console.log(req.isVerified)
    next();
  }
};
