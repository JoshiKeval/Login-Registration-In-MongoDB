const express=require("express");
const app=express();
require("dotenv").config();
const Register=require("./models/userschema");
const userRouter = require("./router/userRouter");
const path=require("path");



app.use(express.json())
const static_path = path.join(__dirname, "./public/");
app.use(express.static(static_path));

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "../views"));



// app.get("/",(req,res)=>{
//     res.render("index");
// })

app.use("/user",userRouter);


// app.get("/login",(req,res)=>{
//     res.render("login")
// })


app.listen(process.env.PORT,(req,res)=>{
    console.log("Server Is Running...")
})