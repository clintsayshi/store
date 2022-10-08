import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import contentReducer from "./actions";
import { shoesApi } from "./shoesApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";

const store = configureStore({
  reducer: {
    [shoesApi.reducerPath]: shoesApi.reducer,
    content: contentReducer,
    cart: cartReducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shoesApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export default store;
