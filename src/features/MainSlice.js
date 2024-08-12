import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let init = {
  data: null,
  originalData: null,
  status: "idle",
  error: null,
};

export const fetchData = createAsyncThunk("main/fetchData", async () => {
  let res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});

let mainSlice = createSlice({
  name: "main",
  initialState: init,
  reducers: {
    decendingOrder: (state) => {
      state.data.sort((a, b) => b.price - a.price);
    },
    ascendingOrder: (state) => {
      state.data.sort((a, b) => a.price - b.price);
    },
    mensFashion: (state) => {
      state.data = state.originalData.filter(
        (item) => item.category === "men's clothing"
      );
    },
    womensFashion: (state) => {
      state.data = state.originalData.filter(
        (item) => item.category === "women's clothing"
      );
    },
    jewelweryData: (state) => {
      state.data = state.originalData.filter((item) => {
        return item.category === "jewelery";
      });
    },
    electronicsData: (state) => {
      state.data = state.originalData.filter(
        (item) => item.category === "electronics"
      );
    },
    resetData: (state) => {
      state.data = state.originalData;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.originalData = action.payload;
        state.status = "idle";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "idle";
      })
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      }),
});

export const {
  decendingOrder,
  ascendingOrder,
  mensFashion,
  womensFashion,
  resetData,
  jewelweryData,
  electronicsData
} = mainSlice.actions;
export default mainSlice.reducer;
