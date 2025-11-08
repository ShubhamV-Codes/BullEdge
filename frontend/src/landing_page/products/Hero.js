import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container border-bottom text-center mb-4">
      <h1 className=" mt-4 "> BullEdge Products</h1>
      <p className="mb-3 fs-4 ">
        Sleek, modern, and intuitive trading platforms
      </p>
      <p className="mb-5">
        
        Check out our &nbsp;
        <Link to="https://bull-edge-kite.vercel.app/" style={{ textDecoration: "none" }}>
          investment offerings →
        </Link>
      </p>
    </div>
  );
}

export default Hero;
