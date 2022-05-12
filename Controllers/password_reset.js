const CONFIG = require("../Configurations/config");

const ResetService = require("../Services/password_reset");
const resetService = new ResetService();
const sendEmail = require("../Utils/sendEmail");

module.exports = class ResetController {
  async password_reset(req, res, next) {
    if (req.isVerified){
      const token = await resetService.password_reset(req.body.email);
      if (token) {
        const link = `${CONFIG.Url}/password-reset/${token.userId}/${token.token}`;
        console.log(link);
        await sendEmail(CONFIG.email, "Password reset", link);
        res.send("password reset link sent to your email account");
      }
    }
   
  }

  async reset_password(req, res, next) {
      if (req.isVerified){
        const { id, token } = req.params;
        const password = req.body.password;
        const response = await resetService.reset_password(id, token, password);
        res.send({ description: "updated sucessfully", user: response });
      }
   
  }

  async getPassword(req, res, next){
    res.send('ENTER NEW PASSWORD')
  }
};
