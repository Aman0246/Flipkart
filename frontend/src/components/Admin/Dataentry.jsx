import styled from '@emotion/styled';
import { Box, Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import axios from 'axios';

const Insidebox=styled(Box)({
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
  let [data,setData]=useState("")
  let [value,setvalue]=useState("")
const handleChange=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
}

const inputobj={
  id:data.id,
    url:value[0],
    title:{
    shortTitle:data.Title,
    longTitle:data.LTitle,
    },
    price :{
                mrp:data.Mrp,
                cost:data.Cost,
                discount:data.Discount,
            },
    description:data. Description,
    tagline:data. Tagline,
}

const handlesubmit=async(e)=>{
  e.preventDefault()
  await axios.post("/createproduct",{...inputobj}).then((output)=>{
    console.log(output)
  })

}
console.log({...inputobj});

  return (
    <OuterBox>
        <Insidebox>
        <TextField  id="standard-basic" label=" Product id" onChange={handleChange}   name='id'   variant="standard" />
        <TextField id="standard-basic" label=" short Title" onChange={handleChange}  name='Title'   variant="standard" />
        <TextField id="standard-basic" label=" Long Title"onChange={handleChange}  name='LTitle'   variant="standard" />
        <TextField  type='number' id="standard-basic"onChange={handleChange}   name='Mrp'  label=" Mrp" variant="standard" />
        <TextField type='number' id="standard-basic"onChange={handleChange}   name='Cost'  label=" Cost" variant="standard" />
        <TextField type='number' id="standard-basic"onChange={handleChange}   name='Discount'  label=" Discount" variant="standard" />
        <TextField id="standard-basic" label=" Description" onChange={handleChange}  name='Description'  variant="standard" />
        <TextField id="standard-basic" label=" Tagline"onChange={handleChange}    name='Tagline' variant="standard" />
        <input type="file"  id="avatar" name="avatar"  onChange={(e)=>{setvalue(e.target.files)}}   accept="image/png, image/jpeg"></input>
        <Button  style={{backgroundColor:"#FF6700",color:"#ffffff",fontWeight:"500"}} onClick={handlesubmit}> Submit </Button>
        </Insidebox>
    </OuterBox>
  )
}

