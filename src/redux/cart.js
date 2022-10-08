import { createSlice, current } from "@reduxjs/toolkit";

let initialState = {
  cart: [],
};

if (JSON.parse(localStorage.getItem("cart"))) {
  initialState.cart = JSON.parse(localStorage.getItem("cart"));
} else {
  initialState.cart = [];
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      let cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.cart)
        : [];

      const duplicates = cart.filter((item) => item.pId === action.payload.pId);

      if (duplicates.length === 0) {
        const productToAdd = {
          ...action.payload,
          count: 1,
        };

        cart = [...cart, productToAdd];

        localStorage.cart = JSON.stringify(cart);

        state.cart = cart;
      }
    },
    incrementItemQty: (state, action) => {
      const cart = current(state.cart);

      let newCart = [...cart];
      for (let i = 0; i < newCart.length; i++) {
        if (newCart[i].pId === action.payload) {
          const temp = {
            ...newCart[i],
            count: newCart[i].count + 1,
          };

          newCart[i] = temp;
          console.log(newCart);
        }
      }

      localStorage.setItem("cart", JSON.stringify(newCart));
      state.cart = [...newCart];
    },
    decrementItemQty: (state, action) => {
      const cart = current(state.cart);

      let newCart = [...cart];
      for (let i = 0; i < newCart.length; i++) {
        if (newCart[i].pId === action.payload) {
          if (newCart[i].count > 1) {
            const temp = {
              ...newCart[i],
              count: newCart[i].count - 1,
            };

            newCart[i] = temp;
          }
        }
      }

      localStorage.setItem("cart", JSON.stringify(newCart));
      state.cart = [...newCart];
    },
    removeFromCart: (state, action) => {
      const newCart = current(state.cart).filter(
        (item) => item.pId !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(newCart));
      state.cart = [...newCart];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, incrementItemQty, decrementItemQty } =
  cartSlice.actions;

export default cartSlice.reducer;
