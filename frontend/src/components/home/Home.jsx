import { Navebar } from "./Navbar"
import { Banner } from "./Banner"
import { Box } from "@mui/material"
import styled from "@emotion/styled"

const BannerWrapper=styled(Box)({
      padding:" 10px 10px",
      backgroundColor:"#f2f2f2"
})

export const Home=()=>{

    return(
        <>
         <Navebar/>
         <BannerWrapper>
         <Banner/>
         </BannerWrapper>
            
        </>
    )
}       