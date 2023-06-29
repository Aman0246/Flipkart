import { createSlice } from '@reduxjs/toolkit';

// Corrected the variable name to `initialValue`
let initialValue ={
    email: "",
 
    firstname:"",
   
    lastname:"",
  
    email:"",
    _id:"",
  
};

export const loginuser = createSlice({
  name: 'logdedinuser',
  // Fixed the variable name to `initialValue`
  initialState: initialValue,
  reducers: {
           currentuser: (state,action) => {
            state.email=action.payload.email
            state.firstname=action.payload.firstname
            state.lastname=action.payload.lastname
            state._id=action.payload._id
            },



   logOutUser:(state,action)=>{
    // console.log(action)
    state.email=""
    state.firstname=""
    state.lastname=""
    state._id=""

   }
  },
});

export const { currentuser,logOutUser } = loginuser.actions;

export default loginuser.reducer;
