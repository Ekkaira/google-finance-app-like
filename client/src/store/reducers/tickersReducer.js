import { createSlice } from "@reduxjs/toolkit";
import socket from "../socket";

const initialState = {
  quotes: [],
};

const tickersSlice = createSlice({
  name: "quotes",
  initialState: initialState,
  reducers: {
    getQuotes(state, action) {
      state.quotes = action.payload.map((data, index) => {
        return { ...state.quotes[index], ...data };
      });
    },
  },
});

export const tickersReducer = tickersSlice.reducer;
export const { getQuotes } = tickersSlice.actions;

export const trackTickers = () => (dispatch) => {
  socket.emit("start");
  socket.on("ticker", (data) => {
    dispatch(getQuotes(data));
  });
};
