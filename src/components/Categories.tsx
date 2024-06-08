import { SetURLSearchParams, URLSearchParamsInit } from "react-router-dom";
import useWhyDidYouUpdate from "ahooks/lib/useWhyDidYouUpdate";
import React from "react";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

type CategoriesProps = {
  setSearchParams: SetURLSearchParams;

  activeCategory: number;
};

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ setSearchParams, activeCategory }) => {
    useWhyDidYouUpdate("Categories", { setSearchParams, activeCategory }); //Для отслеживания перерисовок, тип изменяются ли пропсы?

    const handleChangeCategory = (i: number) => {
      setSearchParams(
        (prev: URLSearchParams) => {
          prev.set("activeCategory", String(i));
          return prev;
        },
        { replace: true }
      );
    };

    return (
      <div className="categories">
        <ul>
          {categories.map((category, i) => {
            return (
              <li
                key={category}
                className={activeCategory === i ? "active" : ""}
                onClick={() => handleChangeCategory(i)}
              >
                {category}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);

export default Categories;
