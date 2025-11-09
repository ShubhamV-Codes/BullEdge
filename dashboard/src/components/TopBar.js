import { TrendingUp, TrendingDown } from "@mui/icons-material";
import Menu from "./Menu";

const TopBar = () => {
  const niftyData = {
    value: 24180.80,
    change: 145.35,
    percent: 0.61,
    isUp: true
  };

  const sensexData = {
    value: 79496.15,
    change: 450.22,
    percent: 0.57,
    isUp: true
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{niftyData.value.toFixed(2)}</p>
          <p className={`percent ${niftyData.isUp ? "up" : "down"}`}>
            {niftyData.isUp ? <TrendingUp className="icon" /> : <TrendingDown className="icon" />}
            {niftyData.change.toFixed(2)} ({niftyData.percent}%)
          </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{sensexData.value.toFixed(2)}</p>
          <p className={`percent ${sensexData.isUp ? "up" : "down"}`}>
            {sensexData.isUp ? <TrendingUp className="icon" /> : <TrendingDown className="icon" />}
            {sensexData.change.toFixed(2)} ({sensexData.percent}%)
          </p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;