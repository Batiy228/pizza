import { useEffect } from "react";
import "../scss/app.scss";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

import Categories from "../components/Categories";
import Pagination from "../components/Pagination";
import { fetchPizza } from "../redux/pizza/asyncActions";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import { SetURLSearchParams, useLocation, useNavigate } from "react-router-dom";
import Sort from "../components/Sort";

type HomeProps = {
  currentPage: number;
  activeCategory: number;
  activeSort: string;
  search: string;
  setSearchParams: SetURLSearchParams;
};

const Home: React.FC<HomeProps> = ({
  currentPage,
  activeCategory,
  activeSort,
  setSearchParams,
  search,
}) => {
  const { items, status } = useAppSelector((state) => state.pizza);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  console.log(pathname);

  const skeletons = [...new Array(10)].map((_, i) => {
    return <Skeleton key={i} />;
  });
  const pizzas = items.map((pizza) => {
    return <PizzaBlock key={pizza.id} {...pizza} />;
  });

  const getPizzas = () => {
    const category = activeCategory !== 0 ? `category=${activeCategory}` : "";
    const searchValue = search && search !== "null" ? `&title=*${search}*` : "";
    const pagination = `&limit=4&page=${currentPage}`;
    console.log(currentPage);
    const getURL = `https://058ef647f2e6af15.mokky.dev/items?${category}${searchValue}&sortBy=${activeSort}${pagination}`;
    dispatch(fetchPizza(getURL));
  };

  useEffect(() => {
    getPizzas();
    window.scrollTo(0, 0);
  }, [activeCategory, activeSort, search, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories
          setSearchParams={setSearchParams}
          activeCategory={activeCategory}
        />
        <Sort activeSort={activeSort} setSearchParams={setSearchParams} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className={"content_error-info"}>
          <h2>Не удалось загрузить питсу 😕</h2>
          <p>
            Технические неполадки, попробуйте перезагрузить страницу либо
            обратитесь в поддержку ^_^
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}

      <Pagination currentPage={currentPage} setSearchParams={setSearchParams} />
    </>
  );
};

export default Home;
