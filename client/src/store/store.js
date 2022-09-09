import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  selectedTickersReducer,
  tickersReducer,
} from "./reducers/tickersReducer";

const store = configureStore({
  reducer: {
    tickers: tickersReducer,
    selectedTickers: selectedTickersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
});
export default store;
