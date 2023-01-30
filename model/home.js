const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
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

const HomeModel = mongoose.model("home",homeSchema);
module.exports = HomeModel;