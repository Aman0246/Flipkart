import styled from '@emotion/styled';
import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import axios from 'axios';

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
  let [data,setData]=useState("")
  let [value,setvalue]=useState("")
const handleChange=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
}

// const inputobj={
//   id:data.id,
//     url:value[0],
//     title:{
//     shortTitle:data.Title,
//     longTitle:data.LTitle,
//     },
//     price :{
//                 mrp:data.Mrp,
//                 cost:data.Cost,
//                 discount:data.Discount,
//             },
//     description:data. Description,
//     tagline:data. Tagline,
// }

const handlesubmit=async(e)=>{
  
  e.preventDefault();
  console.log("clicked")
  let formData=new FormData()
  formData.append('file', value[0])
  formData.append('id', data.id);
  formData.append('shortTitle', data.Title);
  formData.append('longTitle', data.LTitle);
  formData.append('mrp', data.Mrp);
  formData.append('cost', data.Cost);
  formData.append('discount', data.Discount);
  formData.append('description', data.Description);
  formData.append('tagline', data.Tagline);

  await axios.post("/createproduct",formData).then((output)=>{
    console.log(output)
  })
}
return (
    <OuterBox>
         <Insidebox >
         <TextField  id="standard-basic" label=" Product id" onChange={handleChange}   name='id'   variant="standard" />
        <TextField id="standard-basic" label=" short Title" onChange={handleChange}  name='Title'   variant="standard" />
        <TextField id="standard-basic" label=" Long Title"onChange={handleChange}  name='LTitle'   variant="standard" />
        <TextField  type='number' id="standard-basic"onChange={handleChange}   name='Mrp'  label=" Mrp" variant="standard" />
        <TextField type='number' id="standard-basic"onChange={handleChange}   name='Cost'  label=" Cost" variant="standard" />
        <TextField type='number' id="standard-basic"onChange={handleChange}   name='Discount'  label=" Discount" variant="standard" />
        <TextField id="standard-basic" label=" Description" onChange={handleChange}  name='Description'  variant="standard" />
        <TextField id="standard-basic" label=" Tagline"onChange={handleChange}    name='Tagline' variant="standard" /> 
        <TextField type="file"  id="image" name="avatar"  onChange={(e)=>{setvalue(e.target.files)}}   accept="image/png, image/jpeg"></TextField>
        <Button type='submit' onClick={handlesubmit} style={{backgroundColor:"#FF6700",color:"#ffffff",fontWeight:"500"}} > Submit </Button>
        </Insidebox> 
    </OuterBox>
  )
}


// export default function Dataentry() {
//   const [file, setFile] = useState(null);

//   const handleChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post('/createproduct', formData);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <OuterBox>
//       <Insidebox>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="file"
//             id="avatar"
//             name="avatar"
//             onChange={handleChange}
//             accept="image/png, image/jpeg"
//           />
//           <Button
//             style={{ backgroundColor: "#FF6700", color: "#ffffff", fontWeight: "500" }}
//             type="submit"
//           >
//             Submit
//           </Button>
//         </form>
//       </Insidebox>
//     </OuterBox>
//   );
// }
