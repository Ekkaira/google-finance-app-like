import { createSlice } from "@reduxjs/toolkit";
import socket from "../socket";

const initialState = {
  quotes: [],
};
const selectedState = {
  selectedQuotes: [],
};

const tickersSlice = createSlice({
  name: "quotes",
  initialState: initialState,
  reducers: {
    getQuotes(state, action) {
      state.quotes = action.payload.map((data, id) => {
        return { ...state.quotes[id], ...data };
      });
    },
  },
});

const selectedTickersSlice = createSlice({
  name: "selectedQuotes",
  initialState: selectedState,
  reducers: {
    addTicker(state, action) {
      state.selectedQuotes = action.payload.push((data, id) => {
        return { ...state.selectedQuotes[id], ...data };
      });
    },
    removeTicker(state, action) {
      const tickerX = action.payload.ticker;
      state.selectedQuotes = state.selectedQuotes.filter(
        (ticker) => ticker.Id !== tickerX
      );
    },
  },
});

export const trackTickers = () => (dispatch) => {
  socket.emit("start");
  socket.on("ticker", (data) => {
    dispatch(getQuotes(data));
  });
};

export const { getQuotes, addTicker, removeTicker } = tickersSlice.actions;

export const tickersReducer = tickersSlice.reducer;
export const selectedTickersReducer = selectedTickersSlice.reducer;
