const mongoose = require("mongoose");

const singleProductSchema = new mongoose.Schema({
    name:{
        type :String,
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
    
    imageUrl_2:{
        type:String,
        required:true,
    },
    
    imageUrl_3:{
        type:String,
        required:true,
    }
})

const SingleProductModel = mongoose.model("home",singleProductSchema);
module.exports = SingleProductModel;