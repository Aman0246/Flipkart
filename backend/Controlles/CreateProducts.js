
const {Products}=require("../models/productSchema")
const {uploadFile}=require("../aws/aws")

const createproduct=async(req,res)=>{
    // console.log("body",req.body)

    // // let {file}=req.file;
    // console.log("file",req.file)
    // let {id,url,title,price,description,tagline}=req.body

    try {
     
        let filee=req.file
        let {id,shortTitle,longTitle,mrp,cost,discount,description,tagline}=req.body
        if(!id||!shortTitle||!longTitle||!mrp||!cost||!discount||!description||!tagline) {return res.send({status:false,message:"Empty field"})}
        if(!shortTitle) return res.send({status:false,message:"Empty shortTitle"})
        if(!longTitle) return res.send({status:false,message:"Empty longTitle"})
        if(!mrp) return res.send({status:false,message:"Empty mrp"})
        if(!cost) return res.send({status:false,message:"Empty cost"})
        if(!description) return res.send({status:false,message:"Empty description"})
        if(!tagline) return res.send({status:false,message:"Empty tagline"})
        if(parseInt(mrp) < parseInt(cost))return res.send({status:false,message:"Cost must Be less than MRP"})
        if(parseInt(discount) > parseInt(cost)){return res.send({status:false,message:"Discount must Be less than Cost"})}
        let awsUrl= await uploadFile(filee)
        console.log("aws",awsUrl)
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
                                description: description,
                                tagline: tagline,
                            }
        console.log("productDetail",productDetail)
                                const newproduct = await Products.create(productDetail);
                                return res.status(200).send({ status: true, message: 'Product created successfully', data:newproduct });

        
    } catch (error) {
 
        res.send({status:false,message:error.message})
    }   

       

} 
module.exports={createproduct}


