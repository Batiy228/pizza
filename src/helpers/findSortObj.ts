import { list } from "../components/Sort";

export const findSortObj = (activeSort: string) => {
  const sort = list.find((el) => el.sortProperty === activeSort);
  if (sort) {
    return sort;
  }
};
