import React from "react";

function Demat() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-12">
          <h2 className="text-center mb-4">
            Investment options with Zerodha demat account
          </h2>
        </div>
      </div>

      <div className="row p-4">
        {/* Left Column */}
        <div className="col-md-6 col-12 mb-4">
          {/* Stocks */}
          <div className="row mb-4 align-items-center">
            <div className="col-4 text-center">
              <img src="media/images/stocks-acop.svg" alt="Stocks icon" className="img-fluid" />
            </div>
            <div className="col-8">
              <h3 className="mb-2">Stocks</h3>
              <p className="text-muted mb-0">
                Invest in all exchange-listed securities
              </p>
            </div>
          </div>

          {/* IPO */}
          <div className="row align-items-center">
            <div className="col-4 text-center">
              <img src="media/images/ipo-acop.svg" alt="IPO icon" className="img-fluid" />
            </div>
            <div className="col-8">
              <h3 className="mb-2">IPO</h3>
              <p className="text-muted mb-0">
                Apply to the latest IPOs instantly via UPI
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 col-12">
          {/* Mutual Funds */}
          <div className="row mb-4 align-items-center">
            <div className="col-4 text-center">
              <img src="media/images/mf-acop.svg" alt="Mutual funds icon" className="img-fluid" />
            </div>
            <div className="col-8">
              <h3 className="mb-2">Mutual funds</h3>
              <p className="text-muted mb-0">
                Invest in commission-free direct mutual funds
              </p>
            </div>
          </div>

          {/* Futures & Options */}
          <div className="row align-items-center">
            <div className="col-4 text-center">
              <img src="media/images/fo-acop.svg" alt="Futures and options icon" className="img-fluid" />
            </div>
            <div className="col-8">
              <h3 className="mb-2">Futures & options</h3>
              <p className="text-muted mb-0">
                Hedge and mitigate market risk through simplified F&O trading
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <button className="pt-2 btn btn-primary signup-btn fs-5 mb-4 mt-5 ">
          Explore Investments
        </button>
      </div>
    </div>
  );
}

export default Demat;