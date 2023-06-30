import { Box, Grid } from "@mui/material"
import {imageURL} from "../../Constants/data"
import styled from "@emotion/styled"

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const Wrapper=styled(Grid)({
   marginTop:"10px",
   justifyContent:"space-between"
})
const Image = styled.img({
    marginTop: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 600px)':{
      height:"120px",
      objectFit:"cover"
    }
   

}
);


const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
export const MidSection=()=>{
    return(<>
        <Wrapper item lg={12} sm={12} md={12} xs={12} container >
             {imageURL.map(e=>(
                 <Grid item lg={4} >
                <img style={{width:"100%"}} src={e} alt=""  />
                </Grid>
             ))}
        </Wrapper>
        <Image   src={url} alt="logo"  />
        </>
    )
}