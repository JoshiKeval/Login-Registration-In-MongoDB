const mongoose=require("../db/conn");

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const Register=new mongoose.model("Register",userschema);

module.exports=Register;