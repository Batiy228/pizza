import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchFullPizza } from "../redux/fullPiza/asyncActions";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { fullPizza, status } = useAppSelector((state) => state.fullPizza);
  const dispatch = useAppDispatch();

  if (status === "error") {
    navigate("/");
  }

  useEffect(() => {
    if (id) {
      dispatch(fetchFullPizza(id));
    }
  }, []);

  if (!fullPizza) {
    return "loading";
  }
  return (
    <div className="container">
      <img src={fullPizza.imageUrl} />
      <h2>{fullPizza.title}</h2>
      <h4>{fullPizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
