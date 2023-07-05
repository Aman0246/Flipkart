import { configureStore } from '@reduxjs/toolkit'
import singleUser from "../Redux/currentUserSlice"//for login purpose
import allproductslice  from './ProductSlice'
import DetailViewSlice  from './DetailViewSlice'
import cartSlice  from './CartSlice'
import PaginationSLice from './PaginationSLice'

export const store = configureStore({
    reducer: {
      singleUserSlice:singleUser,//for login purpose
      productSlice :allproductslice,
      ProductDetailSlice :DetailViewSlice,
      CartSliceName :cartSlice,
      PaginationSLice:PaginationSLice

    }
})