const express = require("express");
const HomeModel = require("../model/home");
const homeRouter = express.Router();
const jwt = require("jsonwebtoken");
const authenticate = require("../middlewares/auth");

homeRouter.get("/", async(req,res)=>{
    const sort = req.query.sort;
    console.log(sort)
    try {
    if(sort === "asc"){
        const data = await HomeModel.find().sort({"price":1});
   return res.status(200).json(data)
    }else if(sort === "desc"){
    const data = await HomeModel.find().sort({"price":-1});
   return res.status(200).json(data)

    }
    else{
        const data = await HomeModel.find();
   return res.status(200).json(data)
    }
    } catch{
        return res.status(404).json({message:"Not found"})
    }
})

homeRouter.post("/", async (req,res)=>{
    
    let data = new HomeModel(req.body)
    try {
        await data.save();
    } catch{
        return res.status(401).json({message:"Something went worng"})
    }
     res.status(201).json({message:"successfully saved",data})
})

homeRouter.get("/:id",async(req,res)=>{
    let _id = req.params.id;
     console.log(_id)
    let data;
    try {
        data = await HomeModel.findOne({_id});
    } catch (error) {
        return res.status(404).json({message:"Not found"})
    }
    return res.status(200).json({message:"data",data});
})

module.exports = homeRouter;







 