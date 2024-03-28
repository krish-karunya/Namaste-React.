import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItems: (state, action) => {
      //mutating the state here
      state.items.push(action.payload);
    },
    deleteItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
