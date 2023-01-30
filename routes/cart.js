const express = require("express");
const authenticate = require("../middlewares/auth");
const CartModel = require("../model/cart");
const cartRouter = express.Router();


cartRouter.get("/:id",async(req,res)=>{
    const {id} = req.params;
    console.log(req.params.id)
    let data;
    try {
        data = await CartModel.find({userid:id});
    } catch (error) {
        return res.status(404).json({message:"Cart data not found!"})
    }
    return res.status(200).json({message:"Data found",data})
})

cartRouter.post("/",async(req,res)=>{
    const payload = req.body;
    let data = new CartModel(payload);
    try {
        await data.save()
    } catch (error) {
        return res.status(404).json({message:"Data not added",error})
    }
    return res.status(201).json({message:"successfully saved",data})
})

cartRouter.patch("/:id",async(req,res)=>{
    
    const payload = req.body;
    const _id = req.params.id;
    // let findCart;
    // try {
    //      findCart = await CartModel.findOne({_id});
    // } catch (error) {
    //     return res.status(404).json({message:"Something went wrong"})
    // }
    // if(findCart.userid !== userid){
    //     return res.status(401).json({message:"Wrong user"});
    // }

    const updateCart = await CartModel.findByIdAndUpdate({_id},payload);
    try{
    const finalCart=  await updateCart.save()
        return res.status(201).json({finalCart})
    }
    catch{
        return res.status(404).json({message:"Something went wrong 3"})
    }
})

module.exports = cartRouter;