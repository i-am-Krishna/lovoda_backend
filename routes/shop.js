const express = require("express");
const ShopModel = require("../model/shop");
const shopRouter = express.Router();

shopRouter.get("/",async(req,res)=>{
    const sort = req.query.sort;
    let data;
    try {
        if(sort === "asc"){
            data = await ShopModel.find().sort({"price":1});
           }else if(sort === "desc"){
            data = await ShopModel.find().sort({"price":-1});
           }
           else{
               data = await ShopModel.find();
           }
        
    } catch (error) {
        console.log(err)
        return res.status(404).json({message:"something went wrong"})
    }
   return res.status(200).json(data);
})

shopRouter.post("/",async(req,res)=>{
    let data = new ShopModel(req.body);

    try {
        await data.save()
        
        
    } catch (error) {
        return res.status(404).json({message:"data not saved"})
    }
    res.status(201).json({message:"Successfully saved"})
})

shopRouter.get("/:id",async(req,res)=>{
    let _id = req.params.id;
    let data;
    try {
        data = await ShopModel.findOne({_id});
    } catch (error) {
        return res.status(404).json({message:"Not found"})
    }
    return res.status(200).json({message:"data",data});
})


module.exports = shopRouter;
