import React from "react";
import FormData from "./formData";
import { useSelector } from "react-redux";
import "./tickerForm.css";

const TickerForm = () => {
  const quotes = useSelector((state) => state.tickers.quotes);

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
      </div>
    </React.Fragment>
  );
};

export default TickerForm;
