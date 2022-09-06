import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { tickersReducer } from "./reducers/tickersReducer";

const store = configureStore({
  reducer: {
    tickers: tickersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
});
export default store;
