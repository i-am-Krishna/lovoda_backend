const express = require("express");






const app = express();

app.get("",(req,res)=>{
    res.send("Hello world")
})



app.listen(8000,()=>{
    console.log("port running at 8000")
})