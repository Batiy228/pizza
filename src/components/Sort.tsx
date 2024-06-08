import React, { useEffect, useRef, useState } from "react";
import { findSortObj } from "../helpers/findSortObj";
import { SetURLSearchParams } from "react-router-dom";

export type ListItem = {
  name: string;
  sortProperty: "rating" | "price" | "title" | "-rating" | "-price" | "-title";
};

export const list: ListItem[] = [
  { name: "популярности (DESC)", sortProperty: "-rating" },
  { name: "популярности (ASC)", sortProperty: "rating" },

  { name: "цене (DESC)", sortProperty: "-price" },
  { name: "цене (ASC)", sortProperty: "price" },

  { name: "алфавиту (DESC)", sortProperty: "-title" },
  { name: "алфавиту (ASC)", sortProperty: "title" },
];

type SortProps = {
  activeSort: string;
  setSearchParams: SetURLSearchParams;
};

const Sort: React.FC<SortProps> = React.memo(
  ({ activeSort, setSearchParams }) => {
    const [isOpen, setIsOpen] = useState(false);
    const activeSortObj = findSortObj(activeSort);

    const sortRef = useRef<HTMLDivElement>(null);

    const handleChangeSort = (i: ListItem) => {
      setSearchParams(
        (prev: URLSearchParams) => {
          prev.set("activeSort", i.sortProperty);
          return prev;
        },
        { replace: true }
      );
    };

    const handleSelect = (el: ListItem) => {
      handleChangeSort(el);
      setIsOpen(false);
    };

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          sortRef.current &&
          !event.composedPath().includes(sortRef.current)
        ) {
          setIsOpen(false);
        }
      };

      document.body.addEventListener("click", handleClickOutside);

      return () =>
        document.body.removeEventListener("click", handleClickOutside);
    }, []);

    return (
      <div ref={sortRef} className="sort">
        <div onClick={() => setIsOpen(!isOpen)} className="sort__label">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          <b>Сортировка по:</b>
          <span>{activeSortObj?.name}</span>
        </div>
        {isOpen && (
          <div className="sort__popup">
            <ul>
              {list.map((el) => {
                return (
                  <li
                    key={el.name}
                    className={activeSort === el.sortProperty ? "active" : ""}
                    onClick={() => handleSelect(el)}
                  >
                    {el.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

export default Sort;
