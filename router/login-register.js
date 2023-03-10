const User = require("../models/userschema");
const jwt = require("jsonwebtoken");
const cookie=require("cookie-parser");
const JWT=require("../helper/authentication");
///////////////////////////////////////////////////////////////////// signup

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(401).json({
      message: "Please Provide Required Information",
    });
  }
  const userData = { name, email, password };
  const user = await User.findOne({ email });
  if (user) {
    return res.status(401).json({
      message: "User Already registered",
    });
  } else {
    User.create(userData).then((data, err) => {
      if (err) res.status(401).json({ err });
      else res.status(200).json({ message: "User created Successfully" });
    });
  }
};

///////////////////////////////////////////////////////////////////// signin

const signin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({
      message: "Please Provide Required Information",
    });
  }
  const useremail = await User.findOne({ email: email });

  if (useremail.password == password ) {
    ///////////////////////////////////token
    let personalData = { email };
    let token=JWT.generateToken(personalData);
    console.log(token);
    res.cookie(token, {httpOnly:true}).status(200).json({
      message: "Login Successfull",data:{email}
    });
  } else{
    console.log("brother");
    return res.status(401).json({
      message: "Invalid Details",
    });

  }
};

module.exports = { signup, signin };
