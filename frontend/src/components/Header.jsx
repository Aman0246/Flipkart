import { Toolbar,AppBar,styled, Box } from '@mui/material';
import Logo from "../flipkartLogo.png"
import { Search } from './Serch';
import { CustomButtons } from './CustomsButtons';
import { Link } from 'react-router-dom';


const StyledHeader=styled(AppBar)({
    background:"#2874f0",
    height:"55px",  
    
})
const Component=styled(Box)({
    marginLeft:'88px',
    cursor:"pointer",
    '@media (max-width:768px)':{
        marginLeft:"0px"
      }
})
const Image=styled("img")({
  maxWidth:"88px",

})


const CustomButtonWrapper=styled(Box)({
    margin:"0 8% 0 auto"
})
export const Header=()=>{

    return(
        <StyledHeader >
                    <Toolbar style={{minHeight:"55px"}} >
                            <Link to="/">
                             <Component>
                                  <Image  src={Logo}  alt="logo"/>
                             </Component></Link>
                             <Search/>
                             <CustomButtonWrapper>
                                <CustomButtons/>
                             </CustomButtonWrapper>
                    </Toolbar>
        </StyledHeader>
    )

}