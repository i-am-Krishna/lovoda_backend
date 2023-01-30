const express = require("express");
const UserModel = require("../model/user")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();

userRouter.get("/users",async(req,res)=>{
    // const header = req.headers.authorization;
    // console.log(header)
    try {
        let users = await UserModel.find();
        return res.status(200).json({message:"All users",users})
        
    } catch (error) {
        return res.status(404).json(error)
    }
})

userRouter.post("/register",async (req,res)=>{
    let {name,email,password} = req.body;
    console.log(req.body)
    let existingUser;
    try{
        existingUser = await UserModel.findOne({email})
    }
    catch(err){
        console.log(err)
    }
    if(existingUser){
        return res.status(400).json({message:"User Already Exists"})
    }
    let newUser;
    try{
        const hashPassword = await bcrypt.hash(password,10);
        newUser = new UserModel({
        name,email,password:hashPassword
    })
        await newUser.save()
    }
    catch(err){
        console.log(err)
    }
    return res.status(201).json(newUser)
})

userRouter.post("/login",async(req,res)=>{
    let {email,password} = req.body;
    let existingUser;
    try{
        existingUser = await UserModel.findOne({email});
    }
    catch(err){
        console.log(err)
    }
    if(!existingUser){
        return res.status(404).json({message:"User Not Exists"})
    }
    const correctPassword = await bcrypt.compare(password,existingUser.password);
    if(!correctPassword){
        return res.status(400).json({message:"Incorrect Password"});
    }
    console.log(existingUser._id.toString())
    const token = jwt.sign(existingUser._id.toString(),"masai")
    
    return res.status(200).json({message:"Login Successful",user:existingUser,token})

})

module.exports = userRouter;
