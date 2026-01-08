import { createSlice } from "@reduxjs/toolkit";

const storedItems = localStorage.getItem("cartItems");

const initialState = {
  cartItems: storedItems ? JSON.parse(storedItems) : []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          describtion:newItem.describtion,   
          subcat: newItem.subcat,
          price: newItem.price,
          category: newItem.category,
          qty: 1,   // ✅ fixed
          subimage: newItem.subimage,
        });
      }

      {/*
          {
              id: 1,
              name: "2 Chana Burgers",
              price: 220,
              category: "Burgers",
              image: burger1,
              subcat: "Non-veg",
              describtion: "Relish 2 Chana burgers",
              subimage: "./src/assets/nonvegsymb.svg",
              qty: 0
            },*/}

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    updateQuantity: (state, action) => {
      const { id, qty } = action.payload;
      const itemToUpdate = state.cartItems.find(item => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.qty = qty;  // ✅ set directly
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    }

  }
});

export const { addToCart, deleteFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
