const User = require("../models/userschema");

const resetpassword = async(req, res) => {
  try {
    const {currentpassword, newpassword, confirmpassword} = req.body;
    const email = res.locals.email;

    if (!currentpassword || !newpassword || !confirmpassword) {
      return res.status(401).json({
        message: "Please Provide Required Information",
      });
    } 
    const useremail = await User.findOne({ email: email });

    if (useremail.password == currentpassword) {
      if (newpassword == confirmpassword) {
        const updatePassword = await User.updateOne({email}, { $set: {password:newpassword}})
        if (updatePassword){
          res.status(200).json({
            message: "Password updated."
          });
        } else {
          res.status(400).json({
            message: "Password update failed."
          });
        }
      }
    } else {
      res.status(401).json({
        message: "Invalid current psassword"
      });
    }
  } catch (error) {
      res.status(400).json({message: "error.message"});
  }
}

module.exports = {resetpassword};