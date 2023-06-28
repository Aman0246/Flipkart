const express=require("express")
const app =express()
const {routes}=require("./Routes/Routes")
// const{DefaultsData}=require("./defaults")
var cors = require('cors')
app.use(cors({origin: true, credentials: true}));
//------------------------------------------------------------------
const multer  = require('multer')
app.use(multer().any())
//------------------------------------------------------------------
require("dotenv").config()
app.use(express.json())
const mongoose=require("mongoose");
mongoose.connect(process.env.MONGOCONNECT).then(()=>{console.log("DB connected...")}).catch(()=>{console.log("DB not connected...")})
app.use("/",routes)
//-------------------------------------------------------------------------------------------->

//-------------------------------------------------------------------------------------------->

app.listen(process.env.PORT,()=>{
    console.log(`server is running at ${process.env.PORT}......`)
})
// DefaultsData()
