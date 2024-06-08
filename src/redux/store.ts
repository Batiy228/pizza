import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/slice";
import pizzaReducer from "./pizza/slice";
import fullPizzaReducer from "./fullPiza/slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    pizza: pizzaReducer,
    fullPizza: fullPizzaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
