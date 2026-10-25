import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const plant = action.payload;
      const existing = state.items.find(item => item.name === plant.name);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...plant, cost: Number(plant.cost ?? plant.price), quantity: 1 });
    },
    removeItem(state, action) {
      const key = typeof action.payload === 'object' ? action.payload.name ?? action.payload.id : action.payload;
      state.items = state.items.filter(item => item.name !== key && item.id !== key);
    },
    updateQuantity(state, action) {
      const { name, id, quantity, change } = action.payload;
      const item = state.items.find(product => product.name === name || (id !== undefined && product.id === id));
      if (!item) return;
      const next = quantity !== undefined ? Number(quantity) : item.quantity + Number(change ?? 0);
      if (!Number.isFinite(next)) return;
      if (next <= 0) state.items = state.items.filter(product => product.name !== item.name);
      else item.quantity = Math.floor(next);
    },
    clearCart(state) { state.items = []; }
  }
});
export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
