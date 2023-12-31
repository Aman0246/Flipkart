
const {Products}=require("../models/productSchema")
const {uploadFile}=require("../aws/aws")

const createproduct=async(req,res)=>{

    try {
     
        let filee=req.file
        let {id,shortTitle,longTitle,mrp,cost,discount,discountTitle,description,tagline}=req.body
        if(!id||!shortTitle||!longTitle||!mrp||!cost||!discount||!description||!tagline) {return res.send({status:false,message:"Empty field"})}
        if(!shortTitle) return res.send({status:false,message:"Empty shortTitle"})
        if(!longTitle) return res.send({status:false,message:"Empty longTitle"})
        if(!mrp) return res.send({status:false,message:"Empty mrp"})
        if(!cost) return res.send({status:false,message:"Empty cost"})
        if(!description) return res.send({status:false,message:"Empty description"})
        if(!tagline) return res.send({status:false,message:"Empty tagline"})
        if(parseInt(mrp) < parseInt(cost))return res.send({status:false,message:"Cost must Be less than MRP"})
        let awsUrl= await uploadFile(filee)
        const productDetail = {
                                  id:id,
                                   url:awsUrl,
                                   detailUrl:awsUrl,
                                   title:{
                                       shortTitle:shortTitle,
                                    longTitle:longTitle,
                                },
                                price: {
                                    mrp:mrp,
                                    cost:cost,
                                    discount:discount,
                                },
                                discount:discountTitle,
                                description: description,
                                tagline: tagline,
                            }
                                    const newproduct = await Products.create(productDetail);
                                return res.status(200).send({ status: true, message: 'Product created successfully', data:newproduct });

        
    } catch (error) {
 
        res.send({status:false,message:error.message})
    }   

       

} 
module.exports={createproduct}


