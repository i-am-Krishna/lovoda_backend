const express = require("express");
const connection = require("./db");
const cors = require("cors");
const userRouter = require("./routes/user");
const homeRouter = require("./routes/home");
const productRouter = require("./routes/product");
const shopRouter = require("./routes/shop");
const cartRouter = require("./routes/cart");
const authenticate = require("./middlewares/auth");


const app = express();

const port = process.env.PORT || 8000;


app.use(cors());
app.use(express.json());
app.use("/api/user",userRouter);
app.use("/api/home",homeRouter);
app.use("/api/product",productRouter);
app.use("/api/shop",shopRouter);
app.use("/api/cart",cartRouter);

app.get("/",(req,res)=>{
    res.send("Hello world")
})




app.listen(port,async()=>{
    try{
        await connection;
        console.log("Connected with db")
    }
    catch{
        console.log("something went wrong in db")
    }
    console.log("port running at 8000")
})