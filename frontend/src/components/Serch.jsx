import { Box,styled } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';


const SearchContainer=styled(Box)({
        background:"#fff",
        width:"38%",
        borderRadius:"2px",
        marginLeft:"3px",
        display:'flex',
        '@media (min-width:0px) and (max-width:420px)':{
          maxwidth:"37%",
           },
           "@media (max-width:607px)":{
            marginLeft:"8px",
            width:"62%",
        }
})

const InputSearchBase=styled(InputBase)({
    width:"100%",
    padding:"0px 5px",
    
  

})
const SearchIconNavbar=styled(Box)({
    color:"blue",
})


export const Search=()=>{
  const[text,setText]=useState("")
  const products=useSelector(state=>state.productSlice.data)
  console.log(products)
  const getText=(text)=>{
    setText(text)

  }
    return(
        <SearchContainer>
          <InputSearchBase placeholder='Search for products,Brands and more'
          onChange={()=>getText(e.target.value)}/>
          <SearchIconNavbar>
            <SearchIcon/>
          </SearchIconNavbar>
        </SearchContainer>
    )
}   