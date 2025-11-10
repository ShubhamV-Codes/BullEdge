import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <style>{`
        .hero-container {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          padding: 4rem 2rem;
          margin-top: 2rem;
        }

        .hero-heading {
          font-weight: 500;
          color: #1a1a1a;
          text-align: center;
          letter-spacing: -0.3px;
          line-height: 1.6;
          margin-bottom: 3rem;
          position: relative;
        }

        .hero-heading::after {
          content: "";
          position: absolute;
          bottom: -1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 90px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #0d6efd, transparent);
        }

        .hero-content {
          color: #555;
          line-height: 1.8;
          font-size: 1.05rem;
        }

        .hero-content p {
          margin-bottom: 1.5rem;
        }

        .hero-content a {
          font-weight: 600;
          color: #0d6efd;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: color 0.3s ease, border-color 0.3s ease;
        }

        .hero-content a:hover {
          color: #084298;
          border-color: #084298;
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 2rem 1rem;
          }

          .hero-heading {
            font-size: 1.25rem;
            margin-bottom: 2rem;
          }

          .hero-content {
            font-size: 1rem;
          }
        }
      `}</style>

      <section className="hero-container container mb-5">
        <div className="row">
          <h2 className="hero-heading fs-4 px-3">
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h2>
        </div>

        <div className="row mt-4">
          <div className="col-lg-1"></div>

          <div className="col-md-5 col-12 hero-content">
            <p>
              We kick-started operations on the 1st of November, 2025 with the goal
              of breaking all barriers that traders and investors face in India in
              terms of cost, support, and technology. We named the company{" "}
              <strong>BullEdge</strong>, a combination of “Bull” and “Edge”, the
              English word for barrier.
            </p>

            <p>
              Today, our transparent pricing models and in-house technology have
              made us the largest stock broker in India.
            </p>

            <p>
              Over <strong>1.6 crore+</strong> clients place billions of orders
              every year through our powerful ecosystem of investment platforms,
              contributing over <strong>15%</strong> of all Indian retail trading
              volumes.
            </p>
          </div>

          <div className="col-md-5 col-12 hero-content mt-4 mt-md-0">
            <p>
              We also run a number of open online educational and community
              initiatives to empower retail traders and investors.
            </p>

            <p>
              <Link
                to="https://vistara-lime.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vistara
              </Link>
              , our fintech fund and incubator, has invested in multiple fintech
              startups with the goal of expanding India’s capital markets.
            </p>

            <p>
              We’re always building something new — check out our blog for updates,
              media coverage, and insights into our products and philosophy.
            </p>
          </div>

          <div className="col-lg-1"></div>
        </div>
      </section>
    </>
  );
}

export default Hero;
