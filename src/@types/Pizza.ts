export type Pizza = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export type PizzaInCartItem = {
  id: string;
  imageUrl: string;
  title: string;
  activeType: number;
  activeSize: number;
  price: number;
  count: number;
};
