    import { Navebar } from "./Navbar"
    import { Banner } from "./Banner"
    import { Box } from "@mui/material"
    import styled from "@emotion/styled"
    import { fetchAllProduct } from "../../Redux/ProductSlice"
    import { useEffect } from "react"
    import { useDispatch,useSelector } from "react-redux"
    import {Slide} from "./Slide"
    
    const BannerWrapper=styled(Box)({
        padding:" 10px 10px",
        backgroundColor:"#f2f2f2"
    })

    export const Home=()=>{
        let selector=useSelector(state=>state)
        const dispatch=useDispatch();
        console.log(selector.productSlice );
        useEffect(()=>{
            dispatch(fetchAllProduct())
        },[])
        let allProduct=selector.productSlice.data
        // console.log(selector.productSlice.data);


        return(
            <>
            <Navebar/>
            <BannerWrapper>
            <Banner/>

                {/* {selector.productSlice.isLoading==false && selector.productSlice.isError==false?(<Slide allProduct={allProduct} />):("")} */}
                <Slide allProduct={allProduct} title="Deal of the Day" timmer={true} />  
                <Slide allProduct={allProduct} title="Discount for you" />  
                <Slide allProduct={allProduct} title="Suggesting item" />  
                <Slide allProduct={allProduct} title="Trending offers" />  
            </BannerWrapper>
  

            </>
        )
    }       