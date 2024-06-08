import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// import Cart from "./pages/Cart";
// import FullPizza from "./pages/FullPizza";
import MainLayout from "./layouts/MainLayout";
import { useSearchParams } from "react-router-dom";
import React, { Suspense } from "react";
// @ts-ignore
import loadable from "@loadable/component";

const Cart = React.lazy(
  () => import(/* webpackChunkName: "Cart" */ "./pages/Cart")
);
// const FullPizza = React.lazy(
//   () => import(/* webpackChunkName: "FullPizza" */ "./pages/FullPizza")
// );

const FullPizza = loadable(
  () => import(/* webpackChunkName: "FullPizza" */ "./pages/FullPizza"),
  {
    fallback: <div>Идет загрузка корзины...</div>,
  }
);

function App() {
  const [searchParams, setSearchParams] = useSearchParams({
    activeCategory: "0",
    currentPage: "1",
    activeSort: "-rating",
    search: "",
  });
  const search = String(searchParams.get("search") || "");
  const currentPage = Number(searchParams.get("currentPage") || 1);
  const activeCategory = Number(searchParams.get("activeCategory") || 0);
  const activeSort = String(searchParams.get("activeSort") || "-rating");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout search={search} setSearchParams={setSearchParams} />
        }
      >
        <Route
          path=""
          element={
            <Home
              currentPage={currentPage}
              activeCategory={activeCategory}
              activeSort={activeSort}
              setSearchParams={setSearchParams}
              search={search}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идет загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

////////проверка гит амксувцычвс акййй
