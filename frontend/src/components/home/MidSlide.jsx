import { Box } from "@mui/material"
import {Slide} from "./Slide"
import styled from "@emotion/styled";
const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

const Component=styled(Box)({
display:"flex"
})

const Slider=styled(Box)({
    width:"83%",
    '@media (max-width:900px)':{
        width:"100%"
    }

})
const Ad = styled(Box)({
    background: '#ffffff',
    padding: '5px',
    marginTop: '10px',
    marginLeft: '10px',
    textAlign: 'center',
    '@media (max-width: 900px)': {
      display: 'none',
    },
  });


export const MidSlide=({allProduct,title,timmer})=>{
    return(<Component>
                    <Slider>
                    <Slide allProduct={allProduct} title={title} timmer={timmer} />  
                    </Slider>
                    <Ad>
                    <img src={adURL} alt="ad"  style={{width:"217px"}} />
                    </Ad>
    </Component>
    )
}