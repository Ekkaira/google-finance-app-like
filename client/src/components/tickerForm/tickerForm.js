import React from "react";
import FormData from "./formData";
import { useSelector } from "react-redux";

const TickerForm = () => {
  const quotes = useSelector((state) => state.tickers.quotes);

  return (
    <div>
      {quotes.map((data, index) => (
        <FormData
          quote={data}
          id={data.ticker}
          key={index}
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
  );
};

export default TickerForm;
