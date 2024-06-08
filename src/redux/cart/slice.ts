import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Pizza, PizzaInCartItem } from "../../@types/Pizza";
import { RootState } from "../store";
import { getItemsFromLS } from "../../helpers/getItemsFromLS";
import { getTotalPriceFromLS } from "../../helpers/getTotalPriceFromLS";
import { getCountOfItemsFromLS } from "../../helpers/getCountOfItemsFromLS";
import { IInitialState } from "./types";

const initialState: IInitialState = {
  items: getItemsFromLS(),
  totalPrice: getTotalPriceFromLS(),
  countOfItems: getCountOfItemsFromLS(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<PizzaInCartItem>) => {
      const item = state.items.find((obj) => obj.id === action.payload.id);
      if (item) {
        item.count++;
      } else {
        const newItem = {
          ...action.payload,
          count: 1,
        };
        state.items.push(newItem);
      }
      state.countOfItems++;
      state.totalPrice += action.payload.price;
    },
    decreaseCount: (state, action: PayloadAction<PizzaInCartItem>) => {
      const item = state.items.find((obj) => obj.id === action.payload.id);
      if (item) {
        item.count--;
      }

      state.countOfItems--;
      state.totalPrice -= action.payload.price;
    },
    removeItem: (state, action: PayloadAction<PizzaInCartItem>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
      state.countOfItems = state.items.reduce((sum, obj) => {
        return sum + obj.count;
      }, 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.countOfItems = 0;
    },
  },
});

export const { addItem, decreaseCount, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
