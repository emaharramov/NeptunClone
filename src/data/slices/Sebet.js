import { createSlice } from "@reduxjs/toolkit";

export const sebetSlice = createSlice({
  name: "sebet",
  initialState: {
    sebetMehsullari: [],
  },
  reducers: {
    sebeteElaveEt: (state, action) => {
      const existingProduct = state.sebetMehsullari.find((item) => item.id === action.payload.id);

      if (existingProduct) {
        existingProduct.count += action.payload.count;
      } else {
        state.sebetMehsullari.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.sebetMehsullari = state.sebetMehsullari.filter((item) => item.id !== action.payload);
    },
  },
});

export const { sebeteElaveEt, removeFromCart } = sebetSlice.actions;

export default sebetSlice.reducer;
export const sebetQutusuState = (state) => state.sebet.sebetMehsullari;
