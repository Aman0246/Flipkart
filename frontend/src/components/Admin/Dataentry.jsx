import styled from '@emotion/styled';
import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import {Loader} from "../Loader/Loader"
let adminId=import.meta.env.VITE_ADMIN_ID;

const Insidebox=styled(FormControl)({
 maxWidth:"500px",
 maxHeight:"700px",
 display:"flex",
 gap:"20px",
 padding:"10px",
 flexDirection:"column",
 borderRadius:"10px",
 background:"#fffff3",
 margin:"auto",
 boxShadow:" 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
 marginTop:"65px",
})
const OuterBox=styled(Box)({
 
})

export default function Dataentry() {
let [load,setLoad]=useState(false)

  let [data,setData]=useState("")
  let [value,setvalue]=useState("")
const handleChange=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
}
const handlesubmit=async(e)=>{
  e.preventDefault();
  setLoad(true)
  let c=localStorage.getItem("_id")
  if(c===adminId)
{
  let formData=new FormData()
  formData.append('file', value[0])//menditary to use "file"
  formData.append('id', data.id);             //specaily write backend key, value
  formData.append('shortTitle', data.Title);//specaily write backend key, value
  formData.append('longTitle', data.LTitle);//specaily write backend key, value
  formData.append('mrp', data.Mrp);//specaily write backend key, value
  formData.append('cost', data.Cost);//specaily write backend key, value
  formData.append('discount', data.Discount);//specaily write backend key, value
  formData.append('discountTitle', data.Discount);//specaily write backend key, value
  formData.append('description', data.Description);//specaily write backend key, value
  formData.append('tagline', data.Tagline);//specaily write backend key, value
  await axios.post("/createproduct",formData).then((output)=>{
    console.log(output.data.status)
    if(output.data.status==true){
      console.log("ok")
      toast.success(output.data.message)
      setLoad(false)
    }
    else if(output.data.status==false){
      toast.error(output.data.message)
      setLoad(false)
    }
  })}
  else{
    setLoad(false)
    toast.error("You Are not Admin")

  }
}
return (
    <OuterBox>
      {load&&<Loader></Loader>}
         <Insidebox >
         <TextField  id="standard-basic" label=" Product id" onChange={handleChange}   name='id'   variant="standard" />
        <TextField id="standard-basic" label=" short Title" onChange={handleChange}  name='Title'   variant="standard" />
        <TextField id="standard-basic" label=" Long Title"onChange={handleChange}  name='LTitle'   variant="standard" />
        <TextField  type='number' id="standard-basic" onChange={handleChange}   name='Mrp'  label=" Mrp" variant="standard" />
        <TextField type='number' id="standard-basic" onChange={handleChange}   name='Cost'  label=" Cost" variant="standard" />
        <TextField type='Text' id="standard-basic" onChange={handleChange}   name='Discount'  label=" Discount(catchy title)" variant="standard" />
        <TextField id="standard-basic" label=" Description" onChange={handleChange}  name='Description'  variant="standard" />
        <TextField id="standard-basic" label="Discount (%) " onChange={handleChange}  name='Description'  variant="standard" />
        <TextField id="standard-basic" label=" Tagline"onChange={handleChange}    name='Tagline' variant="standard" /> 
        <TextField type="file"  id="image" name="avatar"  onChange={(e)=>{setvalue(e.target.files)}}   accept="image/png, image/jpeg"></TextField>
        <Button type='submit' onClick={handlesubmit} style={{backgroundColor:"#FF6700",color:"#ffffff",fontWeight:"500"}} > Submit </Button>
        </Insidebox> 
    </OuterBox>
  )
}

