import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pizza } from "../../@types/Pizza";
import axios from "axios";

export const fetchFullPizza = createAsyncThunk<Pizza, string>(
  "pizza/fetchFullPizza",
  async (id) => {
    const URL = "https://058ef647f2e6af15.mokky.dev/items/" + id;

    const response = await axios.get<Pizza>(URL);

    const data = response.data;

    return data as Pizza;
  }
);
