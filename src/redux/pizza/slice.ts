import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Pizza } from "../../@types/Pizza";
import { Status } from "../../@types/Status";
import { IPizzas } from "./types";
import { fetchPizza } from "./asyncActions";

const initialState: IPizzas = {
  items: [],
  status: Status.LOADING, //success|error
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizza.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(
        fetchPizza.fulfilled,
        (state, action: PayloadAction<Pizza[]>) => {
          state.items = action.payload;
          state.status = Status.SUCCESS;
        }
      )
      .addCase(fetchPizza.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.items = [];
        console.log(action.payload);
      });
  },
});

export default pizzaSlice.reducer;
