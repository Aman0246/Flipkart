import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import{ producttoview  }from "../../Redux/DetailViewSlice"
import axios from "axios"
import { Box } from "@mui/system"
import {Loader} from "../Loader/Loader"
import { Actionitem } from "./Actionitems"
import styled from "@emotion/styled"
import { Grid, Typography } from "@mui/material"


const Components=styled(Box)({
  
  background:"#f2f2f2",
  marginTop:"55px"

})
const Container=styled(Grid)({

  background:"#ffffff",
})
const RightContainer=styled(Grid)({
  marginTop:"55px"

})




 export const DetailView=()=>{
  let [loading,setLoading]=useState(false)
  let navigate=useNavigate()
  let {id}=useParams()
  let useselector=useSelector(state=>state.ProductDetailSlice.data)
  let uses=useSelector(state=>state)
  let dispatch=useDispatch()
   
useEffect(()=>{
// first checking data is present in Reduxtoolkit Slice 
  let c=useselector.findIndex(e=>e.id===id)
  if(c== -1){

    let  findinginDB=async()=>{
      setLoading(true)
  ///if data is not present in ReduxSlice than find data from mongodb and than add data in same slice
      await axios.get(`/oneproducts/${id}`).then((data)=>{
        setLoading(false)
                           if(data.data.data==null){  navigate("/")}
                          let finalData=data.data.data
                          // console.log(finalData)
                          dispatch(producttoview(finalData))

                  }).catch(()=>{
                    navigate("/")
                  })
                }
                findinginDB()
                console.log(uses)
  }
 //================================================================================================ 
  let foundData=useselector[c]
  dispatch(producttoview(foundData))
},[])
// use console.log(uses) in two ways  1)from home page select product and see the output of ProductDetailSlice.productviewinDetails
//  2) refresh page anD THAN see the output
let e=uses.ProductDetailSlice.productviewinDetails
console.log(e)
// console.log(uses)


      return(
        e&&(<Components>
                      
                     <Container container spacing={1}>
                        <Grid item lg={5} md={4} sm={6}  xs={12}  >
                              <Actionitem e={e}></Actionitem> 
                        </Grid>
                        


                         <RightContainer item lg={6} md={7} sm={5}  xs={12} >
                          <Typography>{e.title.longTitle}</Typography>
                          <Typography>8 Rating & 1 reviews</Typography>
                       
                        </RightContainer>
                      </Container>   
        </Components>
      ))
      
}