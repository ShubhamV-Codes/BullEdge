import { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const generalContext = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
      await axios.post("http://localhost:8080/deleteOrder/:id", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      });

      if (generalContext && generalContext.closeSellWindow) {
        generalContext.closeSellWindow();
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place sell order. Please try again.");
    }
  };

  const handleCancelClick = () => {
    if (generalContext && generalContext.closeSellWindow) {
      generalContext.closeSellWindow();
    }
  };

  // Calculate margin (20% of total value)
  const marginRequired = (stockQuantity * stockPrice * 0.2).toFixed(2);

  return (
    <div className="sell-container" id="sell-window" draggable="true">
      <div className="sell-header">
        <h3>
          {uid} <span>NSE</span>
        </h3>
        <div className="market-options">
          <label>
            <input type="radio" name="market" defaultChecked />
            Market
          </label>
          <label>
            <input type="radio" name="market" />
            Limit
          </label>
          <label>
            <input type="radio" name="market" />
            SL
          </label>
          <label>
            <input type="radio" name="market" />
            SL-M
          </label>
        </div>
      </div>

      <div className="sell-regular-order">
        <div className="sell-inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              min="1"
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              min="0"
            />
          </fieldset>
        </div>

        <div className="sell-order-validity">
          <label>
            <input type="radio" name="validity" defaultChecked />
            Day
          </label>
          <label>
            <input type="radio" name="validity" />
            IOC
          </label>
        </div>
      </div>

      <div className="sell-buttons">
        <span>Margin required ₹{marginRequired}</span>
        <div>
          <button className="btn btn-orange" onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;