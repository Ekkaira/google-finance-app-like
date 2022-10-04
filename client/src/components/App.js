import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";

import TickerForm from "./tickerForm/tickerForm";
import { trackTickers } from "../store/reducers/tickersReducer";
import Footer from "./footer/footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(trackTickers());
  }, []);

  return (
    <div>
      <div className="main">
        <TickerForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
