import { createSlice } from "@reduxjs/toolkit";

let data = [];

let cartSlice = createSlice({
  name: "cart",
  initialState: data,
  reducers: {
    addToCart: (state, action) => {
      const {
        title,
        price,
        description,
        image,
        category,
        id,
        rating,
        count = 1,
      } = action.payload;

      const checkingItem = state.findIndex((item) => item.title === title);
      if (checkingItem !== -1) {
        // item already in cart
        state[checkingItem].count += count;
      } else {
        // item not in cart
        state.push({
          title,
          description,
          price,
          image,
          category,
          id,
          count,
          rating,
        });
      }
    },

    incrementCount: (state, action) => {
      const { title } = action.payload;

      const checkItem = state.findIndex((item) => item.title === title);

      if (checkItem !== -1) {
        if (state[checkItem].count < 8) {
          state[checkItem].count += 1;
        }
      }
    },

    decrementCount: (state, action) => {
      const { title } = action.payload;
      const checkItem = state.findIndex((item) => item.title === title);

      if (checkItem !== -1) {
        if (state[checkItem].count > 1) {
          state[checkItem].count -= 1;
        }
      }
    },

    removeFromCart: (state, action) => {
        const { id } = action.payload;

        const updatedState = state.filter(item => item.id !== id);
      
        return updatedState;
    },

    clearCart: (state,action)=>{
        return []
    }
  },
});

export let { addToCart, incrementCount, decrementCount, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
