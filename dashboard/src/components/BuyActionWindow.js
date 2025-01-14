import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, price }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  // const [stockPrice, setStockPrice] = useState(price);

  const { closeBuyWindow } = useContext(GeneralContext) || {};

  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:8080/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: price,
        mode: "BUY",
      });
      closeBuyWindow && closeBuyWindow();
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow && closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Price</legend>
            <input name="price" id="price" value={price} />
          </fieldset>
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => {
                const value = e.target.value;
                setStockQuantity(value ? Math.max(1, Number(value)) : 1);
              }}
              value={stockQuantity}
              min="1"
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{price}</span>
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
