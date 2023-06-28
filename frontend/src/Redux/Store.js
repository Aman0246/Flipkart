import { configureStore } from '@reduxjs/toolkit'
import singleUser from "../Redux/currentUserSlice"//for login purpose

export const store = configureStore({
    reducer: {
      singleUserSlice:singleUser,//for login purpose

    }
})