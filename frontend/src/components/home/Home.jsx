    import { Navebar } from "./Navbar"
    import { Banner } from "./Banner"
    import { Box } from "@mui/material"
    import styled from "@emotion/styled"
    import { fetchAllProduct } from "../../Redux/ProductSlice"
    import { useEffect } from "react"
    import { useDispatch,useSelector } from "react-redux"
    
    const BannerWrapper=styled(Box)({
        padding:" 10px 10px",
        backgroundColor:"#f2f2f2"
    })

    export const Home=()=>{
        let selector=useSelector(state=>state)
        const dispatch=useDispatch();
        useEffect(()=>{
            dispatch(fetchAllProduct())
            console.log(selector);
        },[])

        return(
            <>
            <Navebar/>
            <BannerWrapper>
            <Banner/>
            </BannerWrapper>
                
            </>
        )
    }       