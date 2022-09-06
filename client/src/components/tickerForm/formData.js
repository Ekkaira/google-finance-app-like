import React from "react";

import "./formData.css";

import TickerColor from "./tickerColor";

const FormData = ({ quote, index }) => {
  const logoColor = TickerColor(quote.ticker);
  let Color = "";
  let Arrow = "";

  const valueCheck = (Number(quote.price) - Number(quote.change)).toFixed();

  if (valueCheck > 0) {
    Color = "green";
    Arrow = "↑";
  }
  if (valueCheck < 0) {
    Color = "red";
    Arrow = "↓";
  }

  return (
    <div className="ticker-form">
      <ul key={index}>
        <li className="ticker" style={{ backgroundColor: logoColor }}>
          {quote.ticker}
        </li>
        <li className="exchange">{quote.exchange}</li>
        <li className="price">{quote.price}</li>
        <li className="change" style={{ color: Color }}>
          {Arrow} {quote.change}
        </li>
        <li className="cng-prcnt" style={{ color: Color }}>
          {Arrow} {quote.change_percent}
        </li>
        <li className="dividend" style={{ color: Color }}>
          {quote.dividend}
        </li>
        <li className="yield" style={{ color: Color }}>
          {quote.yield}
        </li>
        <li className="lst-trd-tm">{quote.last_trade_time}</li>
      </ul>
    </div>
  );
};

export default FormData;
