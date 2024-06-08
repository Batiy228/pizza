import { PizzaInCartItem } from "../@types/Pizza";

export const getTotalPriceFromLS = () => {
  const data = localStorage.getItem("items");
  const json = data ? JSON.parse(data) : [];
  const price = json.reduce(
    (sum: number, item: PizzaInCartItem) => item.price * item.count + sum,
    0
  );
  return price;
};
