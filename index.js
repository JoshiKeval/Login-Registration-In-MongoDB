const express=require("express");
const app=express();
require("dotenv").config();
const Register=require("./models/userschema");
const userRouter = require("./router/userRouter");
app.use(express.json())
const path=require("path");

const static_path = path.join(__dirname, "./public/");
app.use(express.static(static_path));

app.use("/user",userRouter);


app.listen(process.env.PORT,(req,res)=>{
    console.log("Server Is Running...")
})