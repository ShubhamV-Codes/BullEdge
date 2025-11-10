import React from "react";

function Stats() {
  return (
    <>
      <style>{`
        .stats-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          padding: 3rem 2rem;
          margin-top: 3rem;
        }

        .stats-heading {
          font-size: 2.3rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 2rem;
        }

        .stats-subheading {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0d6efd;
          margin-top: 1.5rem;
        }

        .stats-text {
          font-size: 1.05rem;
          color: #555;
          line-height: 1.8;
        }

        .stats-image {
          max-width: 90%;
          filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.08));
        }

        .stats-link {
          color: #0d6efd;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          margin: 0 1rem;
        }

        .stats-link:hover {
          color: #084298;
        }

        @media (max-width: 768px) {
          .stats-heading { font-size: 1.9rem; }
        }
      `}</style>

      <section className="container">
        <div className="stats-section">
          <div className="row align-items-center">
            <div className="col-md-6 col-12">
              <h1 className="stats-heading">Trust With Confidence</h1>

              <h2 className="stats-subheading">Customer-First Always</h2>
              <p className="stats-text">
                13 million customers trust BullEdge with $766 million worth of equity investments.
              </p>

              <h2 className="stats-subheading">No Spam or Gimmicks</h2>
              <p className="stats-text">
                No gimmicks or push notifications — just high-quality apps at your pace.
              </p>

              <h2 className="stats-subheading">The BullEdge Universe</h2>
              <p className="stats-text">
                Not just an app — a complete ecosystem. Our investments in 30+ fintech startups offer you personalized services.
              </p>

              <h2 className="stats-subheading">Do Better with Money</h2>
              <p className="stats-text">
                With initiatives like Nudge and Kill Switch, we help you improve financial discipline.
              </p>
            </div>

            <div className="col-md-6 col-12 text-center mt-4 mt-md-0">
              <img
                src="media/images/ecosystem.png"
                alt="Ecosystem"
                className="stats-image img-fluid"
              />
              <div className="mt-4">
                <a href="/product" className="stats-link">
                  Explore Products <i className="fa fa-long-arrow-right" />
                </a>
                <a href="https://bull-edge-kite.vercel.app" className="stats-link">
                  Try Kite <i className="fa fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Stats;
