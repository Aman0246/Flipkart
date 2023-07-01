import styled from "@emotion/styled"
import { Box, Button } from "@mui/material"

const LeftContainer=styled(Box)({
    minWidth:"40%",
    padding:"40px 0 0 80px"

})
const Image=styled("img")({
    padding:"15px 20px ",
    border:"2px solid #f0f0f0",
    width:"90%"

})


export const Actionitem=({e})=>{
    return(
        <Box>
       <LeftContainer>
        <Image src={e.url} alt="loading.."  />
        <Button variant="contained">Add to Cart</Button>
        <Button variant="contained">Buy Now</Button>
       </LeftContainer>
       </Box>
    )
}