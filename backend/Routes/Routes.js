const express=require("express")
const routes=express.Router()
const {login,registration}=require("../Controlles/Login")
const{D}=require("../Controlles/SignedUpuser")
const {getProducts}=require("../Controlles/ProductController")
// const {uploadimg}=require("../aws/aws")

// routes.post("/write-file-aws",uploadimg)

routes.post("/login",login)
routes.post("/register",registration)
routes.post("/singleuser",D)
routes.post("/allproducts",getProducts)


module.exports={routes}