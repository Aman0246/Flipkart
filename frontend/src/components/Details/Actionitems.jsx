import styled from "@emotion/styled"
import { Box, Button } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import axios from "axios";
import {Loader} from '../Loader/Loader'
import { useDispatch, useSelector } from "react-redux";
import { allDataofCart } from "../../Redux/CartSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";



const LeftContainer=styled(Box)({
    minWidth:"100%",
    padding: "36px 19px 12px 40px",
    // display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",


})
const Image=styled("img")({
    padding:"15px 18px ",
    border:"2px solid #f0f0f0",
    minHeight:"400px",
    maxHeight:"500px",
    minWidth:"90%",
    padding:"0px 5px"


})
const Btn=styled(Button)({

width:"40%",
marginTop:"10px",
height:"50px",
borderRadius:"3px"

})

export const Actionitem=({e})=>{
const [loder,setLoder]=useState(false)

    let userId=localStorage.getItem("_id")
    const selectors=useSelector(state=>state)
    console.log(selectors)
    const dispatch =useDispatch();

    let navigate=useNavigate()


    const addinDb=async()=>{
        setLoder(true)
        if(userId != null){
        await axios.post(`/${ userId }/cartdata`,{...e,userid:userId}).then((e)=>{
            setLoder(false)
            if(e.data.status==true){
                dispatch(allDataofCart(e.data.data))
                console.log(selectors)
                navigate("/cart")

            }
            if(e.data.status==false){
               toast.error(e.data.message)
               navigate("/cart")
            }

        })
        
    }
    if(userId == null){
        setLoder(false)
        toast.error("Please Login ")
    }
    }
    return(
        <Box>
            {loder?<Loader></Loader>:("")}
       <LeftContainer>
        <Image src={e.url} alt="loading.."  />{console.log(e)}
        <Btn onClick={addinDb} style={{backgroundColor:"#FCAE1E",marginLeft:"1%"}}  variant="contained"><ShoppingCartIcon/> Add to Cart</Btn>
        <Btn style={{backgroundColor:"#FC6A03",marginLeft:"8%",}} variant="contained"><FlashOnIcon/>Buy Now </Btn>

       </LeftContainer>
       </Box>
    )
}