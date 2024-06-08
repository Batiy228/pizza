import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pizza } from "../../@types/Pizza";
import axios from "axios";

export const fetchPizza = createAsyncThunk<Pizza[], string>(
  "pizza/fetchPizza",
  async (getURL, { rejectWithValue }) => {
    const response = await axios.get(getURL);
    const data: Pizza[] = response.data.items;

    if (data.length === 0) {
      return rejectWithValue("пиццы пустые");
    }
    return data;
  }
);
