import React from "react";

import "./dashboard.css";

function Dashboard() {
  return (
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
  );
}

export default Dashboard;
