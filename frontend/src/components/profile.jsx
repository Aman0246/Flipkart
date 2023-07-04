import { Box, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { logOutUser } from "../Redux/currentUserSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
let adminEmail=import.meta.env.VITE_ADMIN_EMAIL




 export const Profile=()=>{
    let Dispatchess=useDispatch()
// /*check user data from slice */-----------------------------------
    let useselectorData=useSelector(state=>state)
    // console.log(useselectorData)
    let a=useselectorData.singleUserSlice.firstname
//-------------------------------------------------------------------
let [opens,setopens]=useState(false)
    const handClick=(event)=>{
     setopens(event.currentTarget)
    }
   const handleClose=()=>{
    setopens(false)
   } 
const navigate=useNavigate()
   const Logout=()=>{
    Dispatchess(logOutUser("a"))
    localStorage.clear("_id")
    localStorage.clear("token")
    navigate("/")
    // console.log(useselectorData)
   }

  const onlyAdmin=async()=>{
    console.log("hellow")
    let id = localStorage.getItem("_id");
    if (id) {
        await axios.post("/singleuser", { id: id }).then((a) => {
         if(a.data.user.email=== adminEmail)
         {
                navigate("/addProduct")
         }
         else{
            toast.error("Only Admin")
         }
        });
      }

  }


    return(
/* The code you provided is rendering a dropdown menu component using the `Menu` and `MenuItem`
components from the Material-UI library. */
        <>
          <Box sx={{cursor:"pointer"}} onClick={handClick} ><Typography>{a}</Typography></Box>
                    <Menu
                    anchorEl={opens}
                    open={opens}
                    onClose={handleClose}
                   
                >

                    <MenuItem onClick={()=>{handleClose();Logout();}}>
                    <PowerSettingsNewIcon color="error" fontSize="small"/> Logout</MenuItem>
                    <MenuItem  onClick={onlyAdmin}>  Admin Only
                       </MenuItem>
                </Menu>
        
        </>
    )
}