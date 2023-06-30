import { Toolbar,AppBar,styled, Box } from '@mui/material';
import Logo from "../flipkartLogo.png"
import { Search } from './Serch';
import { CustomButtons } from './CustomsButtons';

const StyledHeader=styled(AppBar)({
    background:"#2874f0",
    height:"55px",  
    
})
const Component=styled(Box)({
    marginLeft:'12%'
    ,paddingBottom:".2%"
})

const CustomButtonWrapper=styled(Box)({
    margin:"0 8% 0 auto"
})
export const Header=()=>{

    return(
        <StyledHeader >
                    <Toolbar style={{minHeight:"55px"}} >
                             <Component>
                                  <img  src={Logo} className='w-[7rem]' alt="logo"/>
                             </Component>
                             <Search/>
                             <CustomButtonWrapper>
                                <CustomButtons/>
                             </CustomButtonWrapper>
                    </Toolbar>
        </StyledHeader>
    )

}