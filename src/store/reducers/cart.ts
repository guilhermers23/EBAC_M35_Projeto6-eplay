import type { IGame } from './../../interfaces/IGame';
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type cartState = { items: IGame[] };
const initialState: cartState = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<IGame>) => {
      state.items.push(action.payload)
    }
  }
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
