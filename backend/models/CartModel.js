const mongoose=require("mongoose")


const CartSchema = new mongoose.Schema({
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
    tagline: String,
    userid:{
        type:String,
        
    }
});

const CartModel = mongoose.model('CartModel', CartSchema);

module.exports={CartModel}