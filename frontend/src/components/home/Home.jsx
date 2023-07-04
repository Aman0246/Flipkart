import React from 'react'

import { Navebar } from "./Navbar"
import { Banner } from "./Banner"
import { Box } from "@mui/material"
import styled from "@emotion/styled"
import { fetchAllProduct } from "../../Redux/ProductSlice"
import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import {Slide} from "./Slide"
import { Loader } from "../Loader/Loader"
import { MidSlide } from "./MidSlide"
import { MidSection } from "./MidSection"
import { getproduct } from "../../Redux/DetailViewSlice"


const BannerWrapper=styled(Box)({
    padding:" 10px 10px",
    backgroundColor:"#f2f2f2"
})
const Loadding=styled(Box)({
    display:"flex",
    justifyContent:"center",
    marginTop:"2rem"

})


export default function Home() {
    let selector=useSelector(state=>state)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchAllProduct())
    },[])
    let allProduct=selector.productSlice.data
    if(selector.productSlice.isLoading==false && selector.productSlice.isError==false){
        dispatch(getproduct(allProduct))

    }
    return(
        <>
        <Navebar/>
        <BannerWrapper>
        <Banner/>
            {selector.productSlice.isLoading==false && selector.productSlice.isError==false?(<>

                <MidSlide allProduct={allProduct} title="Deal of the Day" timmer={true} />  
                <Slide allProduct={allProduct} title="Discount for you" />  
                 <MidSection></MidSection> 
                <Slide allProduct={allProduct} title="Suggesting item" /> 
               
                <Slide allProduct={allProduct} title="Trending offers" />  
            
            </>
            ):(<Loadding>
                <Loader/>
                </Loadding>
                )}
      
        </BannerWrapper>


        </>
    )

}

