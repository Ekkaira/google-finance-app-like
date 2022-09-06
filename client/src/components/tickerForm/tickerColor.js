const TickerColor = (ticker) => {
  const colorData = {
    AAPL: "#413f42",
    GOOGL: "#e94560",
    MSFT: "#7f8487",
    AMZN: "#d49b54",
    META: "#064663",
    TSLA: "#da0037",
  };
  return colorData[ticker];
};

export default TickerColor;
