const { user } = require("../models/userSchema")

const D=async(req,res)=>{
    let {id}=req.body
    console.log({a:id})
    try {
       let c=await user.findById({_id:id})
    if(!c)return res.send({status:false,message:"user not found"})
    res.send({status:true,user:c})
    }          
    catch (error) {
        console.log(error.message);
        res.status(500).send({ status: false, message: "An error occurred" });
      }
      
}

module.exports={D}