import { createSlice } from "@reduxjs/toolkit";
let initialValue={
    data:[]
}

export const Pagination=createSlice({
 name:"PaginateSlice",
 initialState: initialValue,
 reducers:{
    getproductofPage:(state,action)=>{
        state.data=action.payload
    }
 }
})


export const {getproductofPage} = Pagination.actions
export default Pagination.reducer;