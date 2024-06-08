import { PizzaInCartItem } from "../@types/Pizza";

export const getCountOfItemsFromLS = () => {
  const data = localStorage.getItem("items");
  const json = data ? JSON.parse(data) : [];
  const total = json.reduce(
    (sum: number, item: PizzaInCartItem) => item.count + sum,
    0
  );
  return total;
};
