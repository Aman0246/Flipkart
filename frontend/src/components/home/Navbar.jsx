import { Box, Typography } from "@mui/material"
import { navData } from "../../Constants/data"
import styled from "@emotion/styled"

const Navberheader=styled(Box)({
    display:"flex",
    margin:"54px  130px  0  130px",
    justifyContent: "space-between",
    // textAlign:"center"
})

const Text=styled(Typography)({
     fontSize:"14px",
     fontWeight:"600",
     fontFamily:"inherit"
})


 export const Navebar=()=>{
    return(
     <Navberheader>
        {
           navData.map((e,i)=>(<Box key={i} sx={{padding:" 13px 8px", textAlign:"center"}} >
                                       <img src={e.url} alt="categoryLogo" className="w-[64px]"  />
                                       <Text>{e.text}</Text>

                             </Box>
            
           ))
        }
    </Navberheader>)
}