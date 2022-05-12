const _ = require("lodash");
const bcrypt = require("bcrypt");
const UserService = require("../Services/user");
const userService = new UserService();

module.exports = class UserController {
  //REGISTRATION
  async registerUser(req, res) {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const encrypted = await bcrypt.hash(password, salt);

    req.body.password = encrypted;

    const user = _.pick(req.body, ["name", "email", "password"]);

    let result = await userService.registerUser(user);

    res.send({ registered: _.pick(result, ["name", "email"]) });
  }
  
  //one user
  async getUser(req, res) {
    if (req.isVerified) {
      const result = await userService.getUser(req.params.id);
      res.send(_.pick(result, ["name", "email", "createdAt"]));
    } else throw new Error("Acess Denied");
  }

  //all user only  handled by admin
  async getAllUser(req, res) {
    if (req.isVerified && req.isVerified.isAdmin) {
      let response = await userService.getAllUser();
      res.send(response);
    } else throw new Error("Acess Denied you are not an ADMIN");
  }
  // update user
  async updateUser(req, res) {
    if(req.isVerified){ 
        const response = await userService.updateUser(req.params, req.body);
        res.json({
          description: _.pick(response, ["name", "email"]),
          message: "Updated",
        });
    }
   return new Error('Acess Denied')
  }

  //delete user
  async deleteUser(req, res) {
      if (req.isVerified){
        const response = await userService.deleteUser(req.params.id);
        res.send({
          description: "Deleted",
          message: "success",
        });
      }
   
  }
};
