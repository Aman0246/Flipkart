import { Box, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from "@emotion/styled";
import { useState } from 'react';
import { Login } from "./LoginDialog";
import { useSelector } from "react-redux";
import { Profile } from "./profile";



const Wrapper=styled(Box)({
    display:"flex",
    alignItems:"center",

    
})
const SubWrapper=styled(Box)({
    display:"flex",
    gap:"30%",

})

  

export const CustomButtons=()=>{
    let userselecter=useSelector(state=>state)
    let d=userselecter.singleUserSlice.firstname
    const [openLoginDialog,SetopenLoginDialog]=useState(false)
    

const handleOpen=(e)=>{
    e.preventDefault()
    SetopenLoginDialog(!openLoginDialog)
}
    return(
        <Wrapper>
            {d?<Profile/>:<Button  onClick={handleOpen} sx={{backgroundColor:"#fff",color:"#2874f0",boxShadow:"none",textTransform:"none",padding:"2px 7px",marginLeft:{xs:"10px"},borderRadius:"3px",fontWeight:"600"}} variant="contained">Log in</Button>}
            
            <Typography style={{width:"135px",marginLeft:"2%",padding:"0 3px"}}>Become a seller </Typography>
            <Typography style={{width:"135px",marginLeft:"2%"}}>More</Typography>

            <SubWrapper>
                <Box><ShoppingCartIcon/></Box>
            <Typography>Cart</Typography>
            </SubWrapper>
        <Login openLoginDialog={openLoginDialog} SetopenLoginDialog={SetopenLoginDialog} />
        </Wrapper>

    )
}