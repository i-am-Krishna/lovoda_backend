const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
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
    
    imageUrl_2:{
        type:String,
        required:true,
    },
    
    imageUrl_3:{
        type:String,
        required:true,
    }
})

const ShopModel = mongoose.model("shop",shopSchema);
module.exports=ShopModel;