import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";

import ButtonSection from "./buttons/buttonSection";
import Dashboard from "./dashboard/dashboard";
import TickerForm from "./tickerForm/tickerForm";
import { trackTickers } from "../store/reducers/tickersReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(trackTickers());
  }, [dispatch]);

  return (
    <div className="app-container">
      <ButtonSection />
      <Dashboard />
      <TickerForm />
    </div>
  );
};

export default App;
