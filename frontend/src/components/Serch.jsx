import { Box,List,ListItem,styled } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ListItemButton from '@mui/material/ListItemButton';
import {Link} from "react-router-dom"


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
const ListItemWrapper=styled(Box)({
    position:"absolute",
    background:"#ffffff",
    color:"black ",
    marginTop:"36px",
    overflow:"scroll",
    maxWidth:"50%",
    maxHeight:"500px"


})


export const Search=()=>{
  const[text,setText]=useState("")
  const products=useSelector(state=>state.productSlice.data)
  console.log(products)
  const getText=(text)=>{
    setText(text)
    console.log(text)
  }
    return(
        <SearchContainer >
          <InputSearchBase  placeholder='Search for products,Brands and more'
          onChange={(e)=>getText(e.target.value)}/>
          <SearchIconNavbar>
            <SearchIcon/>
          </SearchIconNavbar>
              {
                text&&<ListItemWrapper>
                  {
                    products.filter(e=>e.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(c=>(
                      <ListItemButton onClick={{display:"none"}}>
                        <Link to={`/produt/${c.id}`} onClick={()=>setText("")}>
                        {c.title.longTitle}
                        </Link>
                      </ListItemButton>
                    ))
                  }
                </ListItemWrapper>
              }

        </SearchContainer>
    )
}   


// import { Box, List, ListItem, styled } from '@mui/material';
// import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';
// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// const SearchContainer = styled(Box)({
//   background: "#fff",
//   width: "38%",
//   borderRadius: "2px",
//   marginLeft: "3px",
//   display: 'flex',
//   '@media (min-width:0px) and (max-width:420px)': {
//     maxwidth: "37%",
//   },
//   "@media (max-width:607px)": {
//     marginLeft: "8px",
//     width: "62%",
//   }
// })

// const InputSearchBase = styled(InputBase)({
//   width: "100%",
//   padding: "0px 5px",
// })

// const SearchIconNavbar = styled(Box)({
//   color: "blue",
// })

// const ListItemWrapper = styled(Box)({
//   position: "absolute",
//   background: "#ffffff",
//   color: "black",
//   marginTop: "36px",
// })

// const ListItems = styled(ListItem)({
//   maxWidthwidth: "20px",
// })

// export const Search = () => {
//   const [text, setText] = useState("")
//   const products = useSelector(state => state.productSlice.data)
  
//   const getText = (text) => {
//     setText(text)
//   }

//   return (
//     <SearchContainer>
//       <InputSearchBase
//         placeholder='Search for products, Brands and more'
//         onChange={(e) => getText(e.target.value)}
//       />
//       <SearchIconNavbar>
//         <SearchIcon />
//       </SearchIconNavbar>
//       {text && (
//         <ListItemWrapper>
//           <List>
//             {products
//               .filter(e => e.title.longTitle.toLowerCase().includes(text.toLowerCase()))
//               .map(c => (
//                 <ListItems key={c.id}>
//                   {c.title.longTitle}
//                 </ListItems>
//               ))}
//           </List>
//         </ListItemWrapper>
//       )}
//     </SearchContainer>
//   )
// }
