import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const id = typeof action.payload === 'object' ? action.payload.id : action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    updateQuantity(state, action) {
      const { id, quantity, change } = action.payload;
      const item = state.items.find((product) => product.id === id);
      if (!item) return;
      const updated = quantity !== undefined ? Number(quantity) : item.quantity + Number(change ?? 0);
      if (!Number.isFinite(updated)) return;
      if (updated <= 0) {
        state.items = state.items.filter((product) => product.id !== id);
      } else {
        item.quantity = Math.floor(updated);
      }
    },
    clearCart(state) {
      state.items = [];
    }
  }
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
