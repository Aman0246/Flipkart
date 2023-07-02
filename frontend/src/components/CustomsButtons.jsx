import { Box, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from "@emotion/styled";
import { useState } from 'react';
import { Login } from "./LoginDialog";
import { useSelector } from "react-redux";
import { Profile } from "./profile";
import { Link} from "react-router-dom";
import Badge from '@mui/material/Badge';



const Wrapper=styled(Box)({
    display:"flex",
    alignItems:"center",
    "@media (max-width:607px)":{
        display:"block"
    }

    
})
const SubWrapper=styled(Box)({
    display:"flex",
    gap:"30%",


})
// const Btn=styled(Button)({
//  '@media (max-width:600px)':{
//     display:"none"
//  }
// })
const Typographys=styled(Typography)({
//  '@media (max-width:600px)':{
//     display:"none",
    
//  }
})

  

export const CustomButtons=()=>{
    let userselecter=useSelector(state=>state)
    let length=userselecter.CartSliceName.CartData.length

    let d=userselecter.singleUserSlice.firstname
    const [openLoginDialog,SetopenLoginDialog]=useState(false)
    
// const navigate=useNavigate()
const handleOpen=(e)=>{
    e.preventDefault()
   
    SetopenLoginDialog(!openLoginDialog)
}
    return(
        <Wrapper>
            {d?<Profile/>:<Button  onClick={handleOpen} sx={{backgroundColor:"#fff",color:"#2874f0",boxShadow:"none",textTransform:"none",padding:"2px 7px",marginLeft:{xs:"10px"},borderRadius:"3px",fontWeight:"600"}} variant="contained">Log in</Button>}
            
            <Typographys  style={{width:"135px",marginLeft:"2%",padding:"0 3px"}}>Become a seller </Typographys>
            <Typographys  style={{width:"135px",marginLeft:"2%" }}>More</Typographys>
            <Link to="/cart">
            <SubWrapper>
                <Typographys>  <Badge badgeContent={length} color="error"><ShoppingCartIcon/></Badge></Typographys>
               
            <Typographys >Cart</Typographys>
            </SubWrapper>
            </Link>
        <Login openLoginDialog={openLoginDialog} SetopenLoginDialog={SetopenLoginDialog} />
        </Wrapper>

    )
}
// className="hidden md:block"