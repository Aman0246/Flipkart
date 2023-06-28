const mongoose=require("mongoose")


const productSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title:{
        shortTitle:String,
        longTitle:String
    },
    price: {
        mrp:String,
        cost:String,
        discount:String
    },
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

const Products = mongoose.model('Product', productSchema);

module.exports={Products}