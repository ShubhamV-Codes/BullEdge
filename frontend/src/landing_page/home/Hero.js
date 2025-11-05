import React from "react";
function Hero() {
  return (
    <div className="container mt-2 mb-5">
      <div className="row text-center">
        <img src="media/images/landing.svg" alt="Hero Image" className="mb-5" />
        <div className="mb-2"></div>
        <h1 className="mt-5 mb-3">Invest in Everything</h1>
        <p>
          Online Platform to invest in Stocks, derivatives, Mutual Funds and
          more
        </p>
        <button className="pt-2` btn btn-primary signup-btn fs-5 mb-4 ">
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
