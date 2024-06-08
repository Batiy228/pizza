import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza } from "../../@types/Pizza";
import { Status } from "../../@types/Status";
import { IState } from "./types";
import { fetchFullPizza } from "./asyncActions";

const initialState: IState = {
  fullPizza: null,
  status: Status.LOADING,
};

export const fullPizzaSlice = createSlice({
  name: "fullPizzaSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFullPizza.pending, (state) => {
        state.status = Status.LOADING;
        state.fullPizza = null;
      })
      .addCase(
        fetchFullPizza.fulfilled,
        (state, action: PayloadAction<Pizza>) => {
          state.fullPizza = action.payload;
          state.status = Status.SUCCESS;
        }
      )
      .addCase(fetchFullPizza.rejected, (state) => {
        state.status = Status.ERROR;
        state.fullPizza = null;
        console.log("ошибка при получение питсы");
      });
  },
});

// export const { setItems } = cartSlice.actions;

export default fullPizzaSlice.reducer;
