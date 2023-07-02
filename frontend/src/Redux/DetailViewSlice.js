import { createSlice} from '@reduxjs/toolkit';
let initialValue ={
    data:[],
    productviewinDetails:[]
};

export const Detail=createSlice({
name:'DetailView',
initialState: initialValue,

reducers: {
    getproduct: (state,action) =>{
        state.data=action.payload
    },
    producttoview:(state,action)=>{
        state.productviewinDetails=action.payload

    }
}




})


export const {getproduct,producttoview} = Detail.actions
export default Detail.reducer;