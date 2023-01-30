const express = require("express");
const ProductModel = require("../model/product");
const productRouter = express.Router();

productRouter.get("/",async(req,res)=>{
    const sort = req.query.sort;
    
    let data;
    try {
            if(sort === "asc"){
             data = await ProductModel.find().sort({"price":1});
            }else if(sort === "desc"){
             data = await ProductModel.find().sort({"price":-1});
            }
            else{
                data = await ProductModel.find();
            }
        
}
    catch(error) {
        console.log(err)
        return res.status(404).json({message:"something went wrong"})
    }
    res.status(200).json(data);
})

productRouter.post("/",async(req,res)=>{
    let data = new ProductModel(req.body);
    try {
        await data.save()
        
        
    } catch (error) {
        return res.status(404).json({message:"data not saved"})
    }
    res.status(201).json({message:"Successfully saved"})
})

productRouter.get("/:id",async(req,res)=>{
    let _id = req.params.id;
    let data;
    try {
        data = await ProductModel.findOne({_id});
    } catch (error) {
        return res.status(404).json({message:"Not found"})
    }
    return res.status(200).json({message:"data",data});
})


module.exports = productRouter;
