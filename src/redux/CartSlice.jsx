import { createSlice } from '@reduxjs/toolkit';

// ✅ دالة لتحميل العربة من Local Storage
const loadCartFromStorage = () => {
  try {
    const serializedCart = localStorage.getItem('cart');
    if (serializedCart === null) {
      return [];
    }
    return JSON.parse(serializedCart);
  } catch (err) {
    return [];
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartFromStorage(), // ✅ نبدأ بالعناصر المحفوظة
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (!existingItem) {
        state.items.push({ ...item, quantity: 1 });
      }
      // ✅ حفظ في Local Storage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    incrementQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    decrementQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;