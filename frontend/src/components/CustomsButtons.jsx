import { Box, Typography } from "@mui/material"
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from "@emotion/styled";

const Wrapper=styled(Box)({
    display:"flex",
    alignItems:"center",
    
})
const SubWrapper=styled(Box)({
    display:"flex"
})


export const CustomButtons=()=>{
    return(
        <Wrapper>
            <Button sx={{backgroundColor:"#fff",color:"#2874f0",boxShadow:"none",textTransform:"none",padding:"2px 7px",borderRadius:"3px",fontWeight:"600",marginLeft:"5%"}} variant="contained">Log in</Button>
            <Typography style={{width:"135px",marginLeft:"2%"}}>Become a seller </Typography>
            <Typography style={{width:"135px",marginLeft:"2%"}}>More</Typography>

            <SubWrapper>
                <Box><ShoppingCartIcon></ShoppingCartIcon></Box>
            <Typography>Cart</Typography>
            </SubWrapper>
        </Wrapper>
    )
}