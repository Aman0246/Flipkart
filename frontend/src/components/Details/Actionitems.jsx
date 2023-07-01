import styled from "@emotion/styled"
import { Box, Button } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

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
    return(
        <Box>
       <LeftContainer>
        <Image src={e.url} alt="loading.."  />
 
        <Btn style={{backgroundColor:"#FCAE1E",marginLeft:"1%"}}  variant="contained"><ShoppingCartIcon/> Add to Cart</Btn>
        <Btn style={{backgroundColor:"#FC6A03",marginLeft:"8%",}} variant="contained"><FlashOnIcon/>Buy Now </Btn>

       </LeftContainer>
       </Box>
    )
}