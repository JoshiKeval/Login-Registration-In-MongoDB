const express=require("express");

const userRouter = express.Router();
const {signup,signin}=require("./login-register")


userRouter.post("/signup",signup)
userRouter.post("/signin",signin)


// userRouter.post("/signup", (req, res) => {
//   res.send("Register");
// });

// userRouter.post("/signin", (req, res) => {
//   res.send("Login");
// });


module.exports=userRouter;