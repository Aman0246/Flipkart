const express=require("express")
const routes=express.Router()
const {login,registration}=require("../Controlles/Login")
const{D}=require("../Controlles/SignedUpuser")
const {getProducts,getOneProducts}=require("../Controlles/ProductController")
const { addProduct,alladdProduct,removeitemFromCart } = require("../Controlles/Cart")
const{createproduct}=require("../Controlles/CreateProducts")
const {perPageProduct}=require("../Controlles/Pagination/Pagination")
//============================================================================================
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Set the destination directory for uploaded files
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Set the filename for uploaded files
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });
//============================================================================================

routes.post("/login",login)
routes.post("/register",registration)
routes.post("/singleuser",D)
routes.get("/allproducts",getProducts)
routes.get("/oneproducts/:id",getOneProducts)
routes.post("/:id/cartdata",addProduct)
routes.post("/alladdcartdata",alladdProduct)
routes.post("/delete",removeitemFromCart)
routes.get("/perpage",perPageProduct)
routes.post("/createproduct",upload.single('file'),createproduct)



module.exports={routes}