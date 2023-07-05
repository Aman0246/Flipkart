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
    //    background:"#007FFF",
        minHeight:"50rem",
        overflow:"hidden",
        borderRadius:"10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding:"5px",
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
              
                                        <FilterBox  item lg={2} md={2} sm={0} xs={0} >
                                         <img src="https://i.gadgets360cdn.com/large/bbd-main2_1569816930663.jpg" style={{height:"20rem",marginBottom:"10px"}} alt="" srcset="" />
                                         <img style={{height:"20rem"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPc70BemjiEfYmyPI-gOfUafag8wxcw8Oq1zFyrmU3ILmO4o2pUIhsIemd53fogf7XIU&usqp=CAU" alt="" srcset="" />
                                         <img  style={{height:"20rem",marginTop:"3px"}} src="https://assets.thehansindia.com/h-upload/2021/10/01/1114983-flipkart.webp" alt="" srcset="" />
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
