//taking all products from  ProductSlice
import { createSlice} from '@reduxjs/toolkit';
import { toast } from "react-hot-toast";
let initialValue ={
   CartData:[]
};


export const CartSlice=createSlice({
    name:'CartSliceName',
    initialState: initialValue,
    reducers: {
        allDataofCart:(state,action) =>{
            const checking=state.CartData.some((e)=>e._id===action.payload._id)
               if(checking==true){
                console.log("already")
               }
                else{
          
          
            state.CartData= [
            ...state.CartData,
            { ...action.payload},
          ]};
        },

        
        removefromCart:(state,action) =>{
            const index=state.CartData.findIndex((e)=>e._id===action.payload)
             state.CartData.splice(index,1)
             toast("one item Removed")  
               
        },
        increaseQty:(state,action) =>{
                const index=state.CartData.findIndex((e)=>e._id===action.payload)
               let qty= state.CartData[index].quantity
               const incQty=++qty
               state.CartData[index].quantity=incQty
                  console.log(state.CartData[index].quantity)
                // toast("one item Removed")  
                
            },
        decreaseQty:(state,action) =>{
                const index=state.CartData.findIndex((e)=>e._id===action.payload)
               let qty= state.CartData[index].quantity
               if(qty>1){
               const incQty=--qty
               state.CartData[index].quantity=incQty
                  console.log(state.CartData[index].quantity)
                // toast("one item Removed") 
             }
                
            },




    }
    
})


export const {allDataofCart,removefromCart,increaseQty,decreaseQty} = CartSlice.actions
export default CartSlice.reducer;