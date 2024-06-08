import React, { useCallback, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import styles from "./SearchBlock.module.scss";
// @ts-ignore
import debounce from "lodash.debounce";
import { SearchProps } from "../../layouts/MainLayout";

const Search: React.FC<SearchProps> = ({ search, setSearchParams }) => {
  const [value, setValue] = useState(search || ""); // контролируемый инпут, который сразу отображается в интерфейсе
  const inputRef = useRef<HTMLInputElement>(null); // связывает input 1/2

  const handleChangeSearch = (str: string) => {
    setSearchParams(
      (prev: URLSearchParams) => {
        prev.set("search", str);
        return prev;
      },
      { replace: true }
    );
  };

  const onCLickClear = () => {
    handleChangeSearch("");
    setValue("");
    inputRef.current?.focus(); // при нажатии на крестик текст стирается, но фокус не пропадает
  };

  const updateSearch = useCallback(
    // отложенная запись текста в поиск, для уменьшения количества запросов на сервер, чтобы не на каждую букву
    // @ts-ignore
    debounce((str: string) => {
      handleChangeSearch(str);
    }, 1000),
    []
  );

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearch(e.target.value);
  };

  return (
    <div className={styles.root}>
      <BsSearch className={styles.iconSearch} />
      <input
        ref={inputRef} // связывает input 2/2
        className={styles.search}
        placeholder="Поиск пиццы..."
        value={value}
        onChange={updateInput}
      ></input>
      {value && <MdClear className={styles.iconClear} onClick={onCLickClear} />}
    </div>
  );
};

export default Search;
