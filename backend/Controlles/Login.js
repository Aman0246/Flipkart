const {hassPassword,compare}=require("../Bcrypt/bcrypt");
const {user} = require("../models/userSchema");
const{createJwt}=require("../JWT/Jwt");
var validator = require('validator');
const {validString,validPhone}=require("../Utils")

const registration=async(req,res)=>{
    const {firstname,lastname,email,password,phone}=req.body;
    try {
        if(!firstname||!lastname||!email||!password||!phone)return res.send({status:false,message:"Empty field"})
        if(!validator.isEmail(email))return res.send({status:false,message:"Invalid email"})
        if(!validString(firstname))return res.send({status:false,message:"Invalid firestname"})
        if(!validString(lastname))return res.send({status:false,message:"Invalid lastname"})
        if(!validPhone(phone))return res.send({status:false,message:"Invalid phone"})
        let emailcheck=await user.findOne({email})
        if(emailcheck)return res.send({status:false,message:"used Email"})
        let bcryptpassword= await hassPassword(password)
        let userentry=await user.create({firstname,lastname,email,password:bcryptpassword,phone})
        res.send({status:true,message:"Register succesfull",data:userentry})
    } catch (error) {
        console.log(error.message)
    }
}





const login=async(req,res)=>{
    const {email,password}=req.body;
    try {
        if(!email)return res.send({status:false,message:"Empty email"})
        if(!validator.isEmail(email))return res.send({status:false,message:"Invalid email"})
        if(!password)return res.send({status:false,message:"Empty password"})
        let olduser=await user.findOne({email})
        if(!olduser)return res.send({status:false,message:"Not Register"})
        let encriptedPassword=await compare(password,olduser.password)
        if(!encriptedPassword)return res.send({status:false,message:"Wrong Password"})
        let token= createJwt({id:olduser._id})
        res.cookie("token",token)
        if(!token)return res.send({status:false,message:"unable to Login"})
        return res.send({status:true,message:"Login Successful",token:token,id:olduser._id})
        
    } catch (error) {
       console.log(error) 
    }
}
module.exports={login,registration}