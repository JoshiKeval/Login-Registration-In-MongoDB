const express=require("express");
const { verifyToken } = require("../helper/authentication");

const userRouter = express.Router();
const {signup,signin}=require("./login-register")
const resetpassword = require("./resetpassword")

userRouter.post("/signup",signup)
userRouter.post("/signin",signin)
userRouter.put("/resetpassword",verifyToken,resetpassword)

// userRouter.post("/signup", (req, res) => {
//   res.send("Register");
// });

// userRouter.post("/signin", (req, res) => {
//   res.send("Login");
// });


module.exports=userRouter;