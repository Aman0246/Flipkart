const {CartModel}=require("../models/CartModel")

const addProduct=async(req,res)=>{
    let {id,url,detailUrl,title,price,quantity,description,discount,tagline,userid}=req.body
    try {
        let oldData=await CartModel.findOne({id:id})
        if(oldData) return res.send({status:false,message:"Allready in Cart"})
        const cartData=await CartModel.create({id,url,detailUrl,title,price,quantity,description,discount,tagline,userid})
        res.send({status:true,message:"Added in Cart",data:cartData})
        
    } catch (error) {
        res.send({status:false,message:error.message})
    }

}
const alladdProduct=async(req,res)=>{
    let {user}=req.body
    
        try {
        let Data=await CartModel.find({userid:user})
        if(Data.length==0){return res.send({status:false,message:" Cart is empty"})}
        res.send({status:true,message:"products in Cart",data:Data})
        
    } catch (error) {
        res.send({status:false,message:error.message})
    }

}


const removeitemFromCart=async(req,res)=>{
     let {id}=req.body
     console.log(id);
     try {
        let Data=await CartModel.findOneAndDelete({_id:id})
        if(Data) return res.send({status:true,message:"Removed from Cart",Data:Data})
        
     } catch (error) {
        res.send({status:false,message:error.message})
    }


}
module.exports={addProduct,alladdProduct,removeitemFromCart}
// 649d753e7d92ad0c40dbfbcb