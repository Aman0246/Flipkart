import { configureStore } from '@reduxjs/toolkit'
import singleUser from "../Redux/currentUserSlice"//for login purpose
import allproductslice  from './ProductSlice'

export const store = configureStore({
    reducer: {
      singleUserSlice:singleUser,//for login purpose
      productSlice :allproductslice

    }
})