const {Products} =require("./models/productSchema");
const { products } =require("./Constants/product");

const DefaultsData=async()=>{
    try {
       await Products.insertMany(products)
        
    } catch (error) {
        console.log(error.message)
        
    }
}
module.exports={DefaultsData}