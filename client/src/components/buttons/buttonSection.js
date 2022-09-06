import React from "react";

import "./buttonSection.css";

function ButtonSection() {
  return (
    <div className="buttons-container">
      <ul className="ticker-buttons">
        <li>
          <button id="AAPL" className="aapl">
            AAPL
          </button>
        </li>
        <li>
          <button id="GOOGL" className="googl">
            GOOGL
          </button>
        </li>
        <li>
          <button id="MSFT" className="msft">
            MSFT
          </button>
        </li>
        <li>
          <button id="AMZN" className="amzn">
            AMZN
          </button>
        </li>
        <li>
          <button id="META" className="meta">
            META
          </button>
        </li>
        <li>
          <button id="TSLA" className="tsla">
            TSLA
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ButtonSection;
