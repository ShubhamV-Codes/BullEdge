import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container mb-5">
      <div className="row ">
        {" "}
        <h2 className="fs-4  mb-5 p-5 text-center border-bottom">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h2>
      </div>

      <div className="row">
        <div className="col-2"></div>
        <div className="col-md-4 col-12 pb-3 ps-3 pe-3 me-2 mt-4 fs-6">
          <p className="mb-3">
            We kick-started operations on the 1st of November , 2025 with the
            goal of breaking all barriers that traders and investors face in
            India in terms of cost, support, and technology. We named the
            company <b>BullEdge</b>, a combination of "Bull" and "Edge", the
            English word for barrier.
          </p>

          <p className="mb-3">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p className="mb-3">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes
          </p>
        </div>

        <div className="col-md-4 col-12 fs-6 pb-3 ps-3 mt-4 pe-3">
          <p className="mb-3">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p className="mb-3">
            <Link
              to="https://vistara-lime.vercel.app"
              style={{ textDecoration: "none", color: "#001affff" }}
            >
              Vistara
            </Link>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p className="mb-3">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Hero;
