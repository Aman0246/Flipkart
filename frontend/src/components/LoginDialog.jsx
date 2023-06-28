import { Box, TextField ,Button, Typography,styled} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {Loader} from './Loader/Loader';
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { currentuser } from '../Redux/currentUserSlice';
const Component=styled(Box)({
    height:"70vh",
    width:"90vh",


})
const Image=styled(Box)({
background:"#2874f0",
height:"100%",
width:"40%",
display:"flex",
flexDirection:"column",
justifyContent:"space-between",
textAlign:"left",
alignItems:"end",
paddingBottom:"10%",
'&>div>p':{
    color:"#ffffff"
}

})

const Wrapper=styled(Box)({
    display:"flex",
    width:"50%",
    gap:"4%",
    textAlign:"center",
    flexDirection:"column",
    marginLeft:"2%",
    paddingTop:"5%",

    '&>div':{
     marginTop:"2%"
    }

})
const LoginButton=styled(Button)({
    textTransform:"none",
    background:"#fb641B",
    color:"#fff",
    height:"8%",
    borderRadius:"2%",

})
const OtpButton=styled(Button)({
    textTransform:"none",
    background:"#fff",
    color:"#2874f0",
    height:"7%",
    boxShadow:"0 2px 4px  0 rgb(0 0 0/ 20%)",
    borderRadius:"2%",

})
const Textstyle=styled(Typography)({
     fontSize:"14px",
     color:"#878787"

})
const Textstyle2=styled(Typography)({
     fontSize:"14px",
     color:"#878787",
     textAlign:"center",
     color:"#2874f0",
     fontWeight:600,
     cursor:"pointer"

})

const signupInitial={
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    phone:""

}
const loginInitial={

    email:"",
    password:"",
}

export const Login=({openLoginDialog,SetopenLoginDialog})=>{
const [loder,setloder]=useState(false)
const[accout,Setaccout]=useState(true)
const[signup,setSignup]=useState(signupInitial)
const[login,setLogin]=useState(loginInitial)
     
    const handleclose = ()=>{
        SetopenLoginDialog(false)
        Setaccout(true)
        setloder(false)
    }
const onInputChange=(e)=>{
    // console.log(e.target.name)
    setSignup({...signup,[e.target.name]:e.target.value})
    // console.log(signup)
}

const onInput=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
}


//----------------------------BACKEND------Register------------------------------------------------------------------------
const handelregister=async(e)=>{

    // const navigate=Navigate()
    e.preventDefault()
    setloder(true)
    await axios.post("/register",(signup)).then((data)=>{
        // console.log(signup)
        setloder(false)
        if(data.data.status==false){
          return toast.error(data.data.message)
        }
        if(data.data.status==true){
        toast.success(data.data.message)
        
        SetopenLoginDialog(false)
        // navigate("/login")

    }
    })
}
let dispatchss=useDispatch()
const handleLogin=async(e)=>{
    e.preventDefault()

    setloder(true)
    await axios.post("/login",(login)).then((user)=>{
        setloder(false)
        if(user.data.status==true){
            localStorage.setItem("_id",user.data.id)
            localStorage.setItem("token",true)
           SetopenLoginDialog(false)
        }
        // console.log(user)
    })

}
//-------------------------------------------------------------------------------------------------------------------





    return(
        <Dialog open={openLoginDialog} onClose={handleclose} PaperProps={{sx:{maxWidth:"unset"}}}>
          <Component>
            <Box sx={{display:"flex",height:"100%"}}>
                   
                 <Image>
                    <Box sx={{padding:"10% 10%"}}>
                    <Typography style={{fontSize:"2rem",paddingBottom:"2%"}}>{accout==true?"Login ":"Look like you are hear!"}</Typography>
                    <Typography>{accout==true?"Get access to your Order, Wishlist and Recommendation":"Signup with your mobile no. and get Started.."}</Typography>
                    </Box>
                    <img  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="Logo"  />
                 </Image>
                 
                  {
                      accout==true?
                      
                      
                      <Wrapper>
                        <TextField id="standard-basic" type='Email' onChange={(e)=>onInput(e)} name='email' label="Enter Email" variant="standard" />
                        <TextField id="standard-basic" type='password'onChange={(e)=>onInput(e)} name='password' label="Enter Password" variant="standard" />
                        <Textstyle>By continuing, you agree to flipkart's Terms of use and Privacy Policy </Textstyle>
                        <LoginButton onClick={handleLogin} >Login</LoginButton>
                        <Typography>OR</Typography>
                        <OtpButton>Request Otp</OtpButton>
                        <Textstyle2 onClick={()=>Setaccout(!accout)} >New to Flipkat?create an acount?</Textstyle2>
                        </Wrapper>
                        :
                        <Wrapper>
                        <TextField id="standard-basic" onChange={(e)=>onInputChange(e)} name='firstname' type='text'    label="Enter FirstName" variant="standard" />
                        <TextField id="standard-basic" onChange={(e)=>onInputChange(e)} name='lastname' type='text' label="Enter LastName" variant="standard" />
                        <TextField id="standard-basic" onChange={(e)=>onInputChange(e)} name='email' type='email' label="Enter Email" variant="standard" />
                        <TextField id="standard-basic" onChange={(e)=>onInputChange(e)} name='password' type='password' label="Enter Password" variant="standard" />
                        <TextField id="standard-basic" onChange={(e)=>onInputChange(e)} name='phone' type='text' label="Enter Phone" variant="standard" />
                        <LoginButton onClick={handelregister} >Continue</LoginButton>
                        <OtpButton onClick={()=>Setaccout(!accout)} >Sign in</OtpButton>
                           
                            {loder? <Loader/> :("")}
                               
                        </Wrapper>

                }

            </Box>
          </Component>

        </Dialog>
    )
}
