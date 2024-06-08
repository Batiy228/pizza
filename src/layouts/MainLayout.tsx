import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import { SetURLSearchParams } from "react-router-dom";

export type SearchProps = {
  search: string;
  setSearchParams: SetURLSearchParams;
};

const MainLayout: React.FC<SearchProps> = ({ search, setSearchParams }) => {
  return (
    <div className="wrapper">
      <Header search={search} setSearchParams={setSearchParams} />
      <div className="content">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
