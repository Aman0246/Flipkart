const { Products } =require ("../models/productSchema")


const getProducts=async(req,res)=>{
    try {
            let allproducts=await Products.find()
            if(allproducts.length==0)return res.send({status:false,message:"no data found"})
            res.send({status:true,message:" found",data:allproducts})
    } catch (error) {
        res.send({status:false,message:"500 error"})
    } 
}

module.exports={getProducts}