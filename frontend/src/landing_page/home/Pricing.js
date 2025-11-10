import React from "react";

function Pricing() {
  return (
    <>
      <style>{`
        .pricing-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          padding: 3rem 2rem;
          margin-top: 3rem;
        }

        .pricing-heading {
          font-size: 2.3rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
        }

        .pricing-text {
          font-size: 1.05rem;
          color: #555;
          line-height: 1.8;
        }

        .pricing-link {
          color: #0d6efd;
          font-weight: 600;
          text-decoration: none;
          margin-top: 1rem;
          display: inline-flex;
          align-items: center;
        }

        .pricing-card {
          background: white;
          border-radius: 16px;
          padding: 2rem 1.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .pricing-card h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0d6efd;
        }

        .pricing-card p {
          color: #555;
          font-size: 1rem;
        }
      `}</style>

      <section className="container">
        <div className="pricing-section">
          <div className="row align-items-center">
            <div className="col-md-5 col-12 p-4">
              <h1 className="pricing-heading">Unbeatable Pricing</h1>
              <p className="pricing-text">
                We pioneered discount broking and price transparency in India.
                Enjoy flat fees and zero hidden charges.
              </p>
              <a href="/not-available" className="pricing-link">
                See Pricing <i className="fa fa-long-arrow-right ms-1" />
              </a>
            </div>

            <div className="col-md-7 col-12 p-4">
              <div className="row text-center g-3">
                <div className="col-md-6">
                  <div className="pricing-card h-100">
                    <h1>₹0</h1>
                    <p>
                      Free equity delivery <br /> & direct mutual funds
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="pricing-card h-100">
                    <h1>₹20</h1>
                    <p>
                      Intraday and <br /> F&O trades
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
