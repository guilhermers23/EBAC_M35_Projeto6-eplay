import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type cartState = { items: IGame[], isOpen: boolean };
const initialState: cartState = { items: [], isOpen: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemCart: (state, action: PayloadAction<IGame>) => {
      const game = state.items.find(({ id }) => id === action.payload.id);
      if (!game) {
        state.items.push(action.payload);
      } else {
        alert("Jogo já adicionado ao carrinho.")
      }
    },
    removeItemCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
    openCart: (state) => { state.isOpen = true },
    closeCart: (state) => { state.isOpen = false },
    clearCart: (state) => { state.items = [] },
  }
});

export const { addItemCart, removeItemCart, openCart, closeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
