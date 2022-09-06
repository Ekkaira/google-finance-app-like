import React from "react";

import "./buttonSection.css";

function ButtonSection() {
  return (
    <div className="buttons-container">
      <ul className="ticker-buttons">
        <li>
          <button className="aapl">AAPL</button>
        </li>
        <li>
          <button className="googl">GOOGL</button>
        </li>
        <li>
          <button className="msft">MSFT</button>
        </li>
        <li>
          <button className="amzn">AMZN</button>
        </li>
        <li>
          <button className="meta">META</button>
        </li>
        <li>
          <button className="tsla">TSLA</button>
        </li>
      </ul>
    </div>
  );
}

export default ButtonSection;
