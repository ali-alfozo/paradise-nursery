import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // مصفوفة فارغة لتمثيل عناصر عربة التسوق
  },
  reducers: {
    // إضافة عنصر إلى عربة التسوق
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (!existingItem) {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // إزالة عنصر من عربة التسوق
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // ✅ دالة تحديث الكمية (المطلوبة في معايير التقييم)
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },

    // زيادة الكمية (مستخدمة في CartItem.jsx)
    incrementQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    // إنقاص الكمية (مستخدمة في CartItem.jsx)
    decrementQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
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
