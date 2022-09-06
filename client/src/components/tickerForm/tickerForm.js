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
          key={index}
          ticker={data.ticker}
          exchange={data.exchange}
          rice={data.price}
          change={data.change}
          change_percent={data.change_percent}
          dividend={data.dividend}
          yieldd={data.yieldd}
          last_trade_time={data.last_trade_time}
          diff={data.diff}
        />
      ))}
    </div>
  );
};

export default TickerForm;
