import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';

export default function Components() {
 const select=useSelector(state=>state.PaginationSLice)

console.log(select)

const Container=styled(Box)({
    margin:"50px 30px",
    marginLeft:"100px",

    })
    
 
    const FilterBox=styled(Grid)({

        minHeight:"50rem",
        '@media (max-width: 900px)': {
           display:"none",
          }  })


 const RightBox=styled(Grid)({
            display:"flex",

        })

        const InsidGrid=styled(Grid)({

        flexDirection:"column",
        alignContent:"center",
        alignItems:"center",
    
        
        })
        const RightINBOX=styled(Grid)({

            marginLeft:"30px"
        })

        const fassured = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    return (
        <Container>
        {select.data.length!=0? <Grid container >
              
                                        <FilterBox item lg={2} md={2} sm={0} xs={0} >
                                 
                                        </FilterBox>



                                        <RightBox item lg={9} md={9} sm={11} xs={11} >
                                           

                                            <RightINBOX container >
                                           {
                                           select.data.data.data.map(e=>(
                                                    <InsidGrid lg={4} md={4} sm={12} xs={12}>
                                                        <Box className=" bg-gray-100 flex flex-col gap-2 md:mr-[30rem]  min-w-[21rem] my-4 mx-4 h-[400px] ">
                                                                        <Box className="flex flex-col pt-4 items-center ">

                                                                <img style={{height:"200px",width:"200px"}} src={e.url} alt="" />
                                                                        </Box>
                                                                <Box className="flex flex-col  px-5">
                                                            <Typography sx={{fontSize:"25px"}} >{e.title.shortTitle}</Typography>
                                                            <Box className="flex gap-2">
                                                                <Typography >{e.tagline}</Typography>
                                                                <img style={{width:"60px"}} src={fassured} alt="" srcset="" />
                                                            </Box>
                                                                <Box className="flex gap-3  items-center">
                                                                <Typography sx={{fontSize:"30px",fontWeight:"500"}} >₹{e.price.cost}</Typography>
                                                                <Typography sx={{color:"#888787"}} ><strike>₹{e.price.mrp}</strike></Typography>
                                                                <Typography sx={{color:"green"}} >₹{e.price.discount}</Typography>
                                                                </Box>
                                                                <Typography >{e.discount}</Typography>  
                                                                </Box>
                                                     </Box>
                                                    </InsidGrid>
                                                    ))
                                                }
                                                </RightINBOX>
                                         </RightBox>

                                 </Grid>:("")}
      
    </Container>
  )
}
