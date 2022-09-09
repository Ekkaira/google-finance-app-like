import React from "react";
import FormData from "./formData";
import { useSelector, useDispatch } from "react-redux";
import { addTicker, removeTicker } from "../../store/reducers/tickersReducer";
import "./tickerForm.css";

const TickerForm = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.tickers.quotes);

  const handleAddTicker = (ticker) => {
    dispatch(addTicker(ticker));
  };

  // {quotes.map((data) => ())}

  return (
    <React.Fragment>
      <div className="content-container">
        <div className="info-title">
          <ul>
            <li className="ticker-name">Ticker</li>
            <li className="exchange">Exchange</li>
            <li className="price">Price</li>
            <li className="change">Change</li>
            <li className="cng-prcnt">%</li>
            <li className="dividend">Dividend</li>
            <li className="yield">Yield</li>
            <li className="lst-trd-tm">Last Trade Time</li>
          </ul>
        </div>
        {quotes.map((data) => (
          <FormData
            quote={data}
            id={data.ticker}
            key={data.ticker}
            ticker={data.ticker}
            exchange={data.exchange}
            price={data.price}
            change={data.change}
            change_percent={data.change_percent}
            dividend={data.dividend}
            yield={data.yield}
            last_trade_time={data.last_trade_time}
          />
        ))}
        <div className="buttons-container">
          <ul className="ticker-buttons">
            <li>
              <button
                id="AAPL"
                className="aapl"
                onClick={() => {
                  handleAddTicker("AAPL");
                }}
              >
                AAPL
              </button>
            </li>
            <li>
              <button
                id="GOOGL"
                className="googl"
                onClick={() => {
                  handleAddTicker("GOOGL");
                }}
              >
                GOOGL
              </button>
            </li>
            <li>
              <button
                id="MSFT"
                className="msft"
                onClick={() => {
                  handleAddTicker("MSFT");
                }}
              >
                MSFT
              </button>
            </li>
            <li>
              <button
                id="AMZN"
                className="amzn"
                onClick={() => {
                  handleAddTicker("AMZN");
                }}
              >
                AMZN
              </button>
            </li>
            <li>
              <button
                id="META"
                className="meta"
                onClick={() => {
                  handleAddTicker("META");
                }}
              >
                META
              </button>
            </li>
            <li>
              <button
                id="TSLA"
                className="tsla"
                onClick={() => {
                  handleAddTicker("TSLA");
                }}
              >
                TSLA
              </button>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TickerForm;
