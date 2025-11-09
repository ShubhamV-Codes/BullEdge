import  { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:8080/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      if (generalContext && generalContext.closeBuyWindow) {
        generalContext.closeBuyWindow();
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  const handleCancelClick = () => {
    if (generalContext && generalContext.closeBuyWindow) {
      generalContext.closeBuyWindow();
    }
  };

  // Calculate margin (20% of total value)
  const marginRequired = (stockQuantity * stockPrice * 0.2).toFixed(2);

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="header">
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

      <div className="regular-order">
        <div className="inputs">
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

        <div className="order-validity">
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

      <div className="buttons">
        <span>Margin required ₹{marginRequired}</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;