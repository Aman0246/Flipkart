const express=require("express")
const routes=express.Router()
const {login,registration}=require("../Controlles/Login")
const{D}=require("../Controlles/SignedUpuser")
const {getProducts,getOneProducts}=require("../Controlles/ProductController")
const { addProduct,alladdProduct,removeitemFromCart } = require("../Controlles/Cart")
// const {uploadimg}=require("../aws/aws")

// routes.post("/write-file-aws",uploadimg)

routes.post("/login",login)
routes.post("/register",registration)
routes.post("/singleuser",D)
routes.get("/allproducts",getProducts)
routes.get("/oneproducts/:id",getOneProducts)
routes.post("/:id/cartdata",addProduct)
routes.post("/alladdcartdata",alladdProduct)
routes.post("/delete",removeitemFromCart)


module.exports={routes}