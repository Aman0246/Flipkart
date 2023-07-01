import { Toolbar,AppBar,styled, Box, ListItem } from '@mui/material';
import Logo from "../flipkartLogo.png"
import { Search } from './Serch';
import { CustomButtons } from './CustomsButtons';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
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
    margin:"0 8% 0 auto",
    "@media (max-width:610px)":{
        display:"none"
    }
})
const IconButtons=styled(IconButton)({
  "@media (min-width:601px)":{
       display:"none"
  }
})

export const Header=()=>{
    const[open,setOpen]=useState(false)
const handleOpen=()=>{
    setOpen(true)
}
const handleClose=()=>{
    setOpen(false)
}

const list=()=>{
    return(
    <Box style={{width:"300px"}} onClick={handleClose}>
    <List>
        <ListItemButton   >
        <CustomButtons/>
        </ListItemButton>
    </List>
</Box>)
   
}



    return(
        <StyledHeader >
                    <Toolbar style={{minHeight:"55px"}} >
                    <IconButtons color='inherit' onClick={handleOpen}>
                    <MenuIcon/>
                        </IconButtons>
                       <Drawer open={open} onClose={handleClose} >
                                {list()}                       
                       </Drawer>
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