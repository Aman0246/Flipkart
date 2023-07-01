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
    singleProductDetails:(state,action)=>{
        // console.log(state.data)
        // console.log(action.payload);
        // let index=
        // let 
    },
    producttoview:(state,action)=>{
        state.productviewinDetails=action.payload

    }
}




})


export const {getproduct,singleProductDetails,producttoview} = Detail.actions
export default Detail.reducer;