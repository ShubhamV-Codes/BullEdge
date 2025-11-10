import React from "react";

function Brokerage() {
  return (
    <>
      <style>{`
        .brokerage-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          padding: 4rem 2rem;
          margin-top: 3rem;
          transition: all 0.3s ease;
        }

        .brokerage-card {
          padding: 2rem 1.5rem;
          border-radius: 16px;
          transition: all 0.25s ease;
        }

        .brokerage-card:hover {
          background-color: #f9fafc;
          box-shadow: 0 5px 18px rgba(0, 0, 0, 0.08);
          transform: translateY(-3px);
        }

        .brokerage-card img {
          max-width: 12rem;
          margin-bottom: 1.5rem;
        }

        .brokerage-card h1 {
          font-size: 1.6rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .brokerage-card p {
          font-size: 1rem;
          color: #555;
          line-height: 1.8;
          max-width: 90%;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .brokerage-section {
            padding: 3rem 1rem;
          }

          .brokerage-card h1 {
            font-size: 1.4rem;
          }

          .brokerage-card p {
            font-size: 0.95rem;
          }

          .brokerage-card img {
            max-width: 9rem;
          }
        }

        @media (max-width: 480px) {
          .brokerage-card {
            padding: 1.5rem 1rem;
          }

          .brokerage-card h1 {
            font-size: 1.3rem;
          }

          .brokerage-card img {
            max-width: 8rem;
          }
        }
      `}</style>

      <section className="container brokerage-section text-center">
        <div className="row gy-5">
          <div className="col-md-4 col-12 brokerage-card">
            <img
              src="media/images/pricing0.svg"
              alt="Free Equity Delivery"
              loading="lazy"
            />
            <h1>Free Equity Delivery</h1>
            <p>
              All equity delivery investments (NSE, BSE) are absolutely free —
              ₹0 brokerage.
            </p>
          </div>

          <div className="col-md-4 col-12 brokerage-card">
            <img
              src="media/images/other-trades.svg"
              alt="Intraday and F&O trades"
              loading="lazy"
            />
            <h1>Intraday and F&O Trades</h1>
            <p>
              Flat ₹20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity. Flat ₹20
              on all option trades.
            </p>
          </div>

          <div className="col-md-4 col-12 brokerage-card">
            <img
              src="media/images/pricing0.svg"
              alt="Free Direct MF"
              loading="lazy"
            />
            <h1>Free Direct MF</h1>
            <p>
              All direct mutual fund investments are absolutely free — ₹0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Brokerage;
