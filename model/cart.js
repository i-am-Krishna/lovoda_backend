const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    name:{
        type : String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    imageUrl_1:{
        type:String,
        required:true,
    },
    userid:String,
    count:{
        type:Number,
        default:1
    }
})

const CartModel = mongoose.model("cart",cartSchema);
module.exports=CartModel;