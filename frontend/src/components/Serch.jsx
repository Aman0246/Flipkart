import { Box,styled } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer=styled(Box)({
        background:"#fff",
        width:"38%",
        borderRadius:"2px",
        marginLeft:"3px",
        display:'flex',
})

const InputSearchBase=styled(InputBase)({
    width:"100%",
    padding:"0px 5px",
  

})
const SearchIconNavbar=styled(Box)({
    color:"blue",
})


export const Search=()=>{
    return(
        <SearchContainer>
          <InputSearchBase placeholder='Search for products,Brands and more'/>
          <SearchIconNavbar>
            <SearchIcon/>
          </SearchIconNavbar>
        </SearchContainer>
    )
}   