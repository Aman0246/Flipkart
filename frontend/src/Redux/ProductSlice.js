import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Serialize the headers into a plain JavaScript object
const serializeHeaders = (headers) => {
  const serializedHeaders = {};

  headers.forEach((value, name) => {
    serializedHeaders[name] = value;
  });

  return serializedHeaders;
};

export const fetchAllProduct = createAsyncThunk("nameFetchAllProduct", async () => {
  const response = await axios.get("/allproducts");

  // Extract the necessary data from the response
  const { status, message, data } = response.data;

  return {
    status,
    message,
    data,
 // Serialize the headers
  };
});

export const getproductslice = createSlice({
  name: 'getproductslice',
  initialState: {
    isLoading: false,
    data: [],
    isError: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchAllProduct.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  }
});

export default getproductslice.reducer;
