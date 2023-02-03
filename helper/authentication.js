const jwt=require("jsonwebtoken");

function generateToken(data){
 return jwt.sign({ data }, process.env.secreat_key, {
        expiresIn: process.env.token_expire,
      });
}

let verifyToken=(req,res,next)=>{
    try {
        console.log("Hello Verify");
        const {token}=req.cookies.token;
        if(!token){
            res.redirect("/");
            res.status(200).end();
        }
        const decodeToken=jwt.verify(token,process.env.secreat_key);
        console.log(decodeToken);
        next();
    } catch (error) {
        
    }
}
module.exports={generateToken,verifyToken}