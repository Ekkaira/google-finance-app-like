import React from "react";

import "./footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return <div className="footer-container">Denys Chebotar © {year}</div>;
}

export default Footer;
