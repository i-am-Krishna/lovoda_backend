const jwt = require("jsonwebtoken");

const authenticate =(req,res,next)=>{
    const token = req.headers.authorization;
    if(token){
        const decode = jwt.verify(token,"masai");
        if(decode){
            req.body.userid = decode;
            // console.log(decode,req.body.userid)
           next()
        }
        else{
             res.status(400).json({message:"Please login first"})
        }
    }
    else{
        res.status(400).json({message:"Please login first---"})
    }
}

module.exports = authenticate;