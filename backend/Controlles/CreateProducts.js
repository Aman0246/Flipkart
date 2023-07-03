
const {Products}=require("../models/productSchema")
const {uploadFile}=require("../aws/aws")
const createproduct=async(req,res)=>{
    try {
    
        // let {url}=req.file
        console.log(req.body)
        let {id,url,title,price,description,tagline}=req.body
        if(!id||!title||!price||!description||!tagline) {return res.send({status:false,message:"Empty field"})}
        if(!title.shortTitle) return res.send({status:false,message:"Empty shortTitle"})
        if(!title.longTitle) return res.send({status:false,message:"Empty longTitle"})
        if(!price.mrp) return res.send({status:false,message:"Empty mrp"})
        if(!price.cost) return res.send({status:false,message:"Empty cost"})
        if(!description) return res.send({status:false,message:"Empty description"})
        if(!tagline) return res.send({status:false,message:"Empty tagline"})
        if(parseInt(price.mrp) < parseInt(price.cost))return res.send({status:false,message:"Cost must Be less than MRP"})
        if(parseInt(price.discount) > parseInt(price.cost)){return res.send({status:false,message:"Discount must Be less than Cost"})}
        let awsUrl= await uploadFile(url)
        // console.log(req.body)
        
         const productDetail = {
                                   id:id,
                                   url:awsUrl,
                                   detailUrl:awsUrl,
                                   title:{
                                    shortTitle:shortTitle,
                                    longTitle:longTitle,
                                   },
                                   price: {
                                                mrp:price.mrp,
                                                cost:price.cost,
                                                discount:price.discount,
                                            },
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


