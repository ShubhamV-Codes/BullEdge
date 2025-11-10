import React from "react";
import { useNavigate } from "react-router-dom";

function Demat() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .demat-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          padding: 4rem 2rem;
          margin-top: 3rem;
          transition: all 0.3s ease;
        }

        .demat-heading {
          font-size: 2.2rem;
          font-weight: 700;
          text-align: center;
          color: #1a1a1a;
          margin-bottom: 3rem;
        }

        .demat-option {
          border-radius: 12px;
          padding: 1rem 1.2rem;
          transition: all 0.25s ease;
        }

        .demat-option:hover {
          background-color: #f8f9fa;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          transform: translateY(-3px);
        }

        .demat-option img {
          width: 55px;
          height: 55px;
          object-fit: contain;
        }

        .demat-option h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
          color: #111;
        }

        .demat-option p {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 0;
        }

        .explore-btn {
          background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
          color: #fff;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          padding: 0.8rem 2.5rem;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          box-shadow: 0 8px 20px rgba(13, 110, 253, 0.25);
        }

        .explore-btn:hover {
          background: linear-gradient(135deg, #0a58ca 0%, #084298 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(13, 110, 253, 0.35);
        }

        @media (max-width: 768px) {
          .demat-section {
            padding: 3rem 1rem;
          }

          .demat-heading {
            font-size: 1.8rem;
            margin-bottom: 2rem;
          }

          .demat-option h3 {
            font-size: 1.1rem;
          }

          .demat-option img {
            width: 45px;
            height: 45px;
          }
        }
      `}</style>

      <section className="container">
        <div className="demat-section">
          <div className="row">
            <div className="col-12">
              <h2 className="demat-heading">
                Investment options with Zerodha demat account
              </h2>
            </div>
          </div>

          <div className="row p-3">
            {/* Left Column */}
            <div className="col-md-6 col-12 mb-4">
              <div className="row align-items-center demat-option mb-4">
                <div className="col-4 text-center">
                  <img
                    src="media/images/stocks-acop.svg"
                    alt="Stocks icon"
                    className="img-fluid"
                  />
                </div>
                <div className="col-8">
                  <h3>Stocks</h3>
                  <p>Invest in all exchange-listed securities</p>
                </div>
              </div>

              <div className="row align-items-center demat-option">
                <div className="col-4 text-center">
                  <img
                    src="media/images/ipo-acop.svg"
                    alt="IPO icon"
                    className="img-fluid"
                  />
                </div>
                <div className="col-8">
                  <h3>IPO</h3>
                  <p>Apply to the latest IPOs instantly via UPI</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-6 col-12">
              <div className="row align-items-center demat-option mb-4">
                <div className="col-4 text-center">
                  <img
                    src="media/images/mf-acop.svg"
                    alt="Mutual funds icon"
                    className="img-fluid"
                  />
                </div>
                <div className="col-8">
                  <h3>Mutual Funds</h3>
                  <p>Invest in commission-free direct mutual funds</p>
                </div>
              </div>

              <div className="row align-items-center demat-option">
                <div className="col-4 text-center">
                  <img
                    src="media/images/fo-acop.svg"
                    alt="Futures and options icon"
                    className="img-fluid"
                  />
                </div>
                <div className="col-8">
                  <h3>Futures & Options</h3>
                  <p>Hedge and mitigate market risk through simplified F&O trading</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <button
              className="explore-btn"
              onClick={() => navigate("/not-available")}
            >
              Explore Investments
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Demat;
