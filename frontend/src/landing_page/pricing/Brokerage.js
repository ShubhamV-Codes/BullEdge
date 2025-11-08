import React from "react";
function Brokerage() {
  return (
    <div className="container text-center">
        <div className="row">
      <div className="col-md-4 col-12 text-center ">
        <img src="media/images/pricing0.svg" style={{maxWidth:"12rem"}} alt="Free Equity Delivery" /> 
        <h1 className=" "> Free Equity Delivery</h1>
        <p className="text-muted">
          All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0
          brokerage.
        </p>
      </div>
      <div className="col-md-4 col-12 text-center">
        <img src="media/images/other-trades.svg"style={{maxWidth:"12rem"}}  alt="Intraday and F&O trades"/>
        <h1 className=" "> Intraday and F&O trades</h1>
        <p className="text-muted">
          Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
        </p>
      </div>
      <div className="col-md-4 col-12 text-center">
        <img src="media/images/pricing0.svg" style={{maxWidth:"12rem"}} alt="Free direct MF"/>
        <h1 className=" "> Free direct MF</h1>
        <p className="text-muted">
         All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges. 
        </p>
      </div>
      </div>
    </div>
  );
}

export default Brokerage;
