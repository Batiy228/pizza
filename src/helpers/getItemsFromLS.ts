import { PizzaInCartItem } from "../@types/Pizza";

export const getItemsFromLS = () => {
  const data = localStorage.getItem("items");
  return data ? JSON.parse(data) : [];
};
