import React from "react";

function Awards() {
  return (
    <>
      <style>{`
        .awards-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          padding: 3rem 2rem;
          margin-top: 3rem;
        }

        .awards-heading {
          font-size: 2.3rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
        }

        .awards-text {
          font-size: 1.05rem;
          color: #555;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .awards-image {
          filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.08));
          max-height: 420px;
        }

        .press-logo {
          filter: grayscale(100%) brightness(0.7);
          transition: all 0.3s ease;
        }

        .press-logo:hover {
          filter: none;
        }

        .awards-list li {
          font-size: 1rem;
          color: #333;
          padding: 4px 0;
        }

        @media (max-width: 768px) {
          .awards-heading { font-size: 1.9rem; }
        }
      `}</style>

      <section className="container mt-5 py-4">
        <div className="awards-section">
          <div className="row align-items-center">
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src="media/images/largestBroker.svg"
                alt="Largest Broker"
                className="img-fluid awards-image"
              />
            </div>

            <div className="col-md-6">
              <h1 className="awards-heading">Largest Stock Broker in India</h1>
              <p className="awards-text">
                Over <strong>2 million BullEdge clients</strong> contribute to more than 15% of all retail order volumes in India every day by trading and investing in:
              </p>

              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled awards-list">
                    <li>Futures & Options</li>
                    <li>Commodity Derivatives</li>
                    <li>Currency Derivatives</li>
                    <li>Index Derivatives</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled awards-list">
                    <li>Stocks & IPOs</li>
                    <li>Direct Mutual Funds</li>
                    <li>Bonds & Govt. Securities</li>
                    <li>Exchange-Traded Funds (ETFs)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <img
                  src="media/images/pressLogos.png"
                  alt="Press logos"
                  className="img-fluid press-logo"
                  style={{ maxWidth: "80%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Awards;
