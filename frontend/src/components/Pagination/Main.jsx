import styled from '@emotion/styled'
import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
// import { useLocation } from 'react-router-dom';
// import queryString from 'query-string';//npm packege
import axios from 'axios';
import { getproductofPage } from '../../Redux/PaginationSLice';
import { useDispatch} from 'react-redux';
import Components from './Components';
import { Loader } from '../Loader/Loader';




const BoxConatiner=styled(Box)({
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
paddingBottom:"30px"

})

export default function Main() {
const [start,end]=useState(false)
    // use to changes in Urls
    //  const location = useLocation();//gives you the all values of URL
    // // const queryParams = queryString.parse(location.search);
    // // let queryPageNumber=queryParams.page
    // // console.log(queryParams.page)


    const dispatch=useDispatch()

 let [page,setpage]=useState(1)
 useEffect(()=>{
     let c=async()=>{
        end(true)
         await axios.get(`/perpage?page=${page}`).then((data)=>{
            end(false)
             console.log(data)
             dispatch(getproductofPage(data))
            }).catch((error)=>{
                console.log(error)
    })}
c();
    },[page])


  return (

    <BoxConatiner >
       {start?<Loader></Loader>:<Components/>}
     
       <Pagination  size="large"  count={3} color="primary" onChange={(event,page)=>setpage(page)} />
    </BoxConatiner>

  )
}




