import { PizzaInCartItem } from "../../@types/Pizza";

export type IInitialState = {
  items: PizzaInCartItem[];
  totalPrice: number;
  countOfItems: number;
};
