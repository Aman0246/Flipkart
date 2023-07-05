const {Products}=require("../../models/productSchema")

const perPageProduct=async(req,res)=>{
    let page=Number(req.query.page)||1;
     let limit=6 
   
    let skip=(page-1)*6
  let data=await Products.find().skip(skip).limit(limit)
  if(data.length>0){
  return res.send({status:true,message:`product of page ${page}`,data:data})}
   else return res.send({status:false,message:`no data found `})
}

module.exports={perPageProduct}