import React from "react";

function Hero() {
  return (
    <>
      <style>{`
        .demat-hero {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          padding: 4rem 2rem;
          margin-top: 3rem;
        }

        .demat-hero h1 {
          font-size: 2.6rem;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: -0.5px;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .demat-hero h5 {
          font-size: 1.2rem;
          color: #555;
          font-weight: 400;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .demat-hero img {
          width: 70%;
          display: block;
          margin: 0 auto;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        @media (max-width: 768px) {
          .demat-hero {
            padding: 3rem 1rem;
          }

          .demat-hero h1 {
            font-size: 2rem;
          }

          .demat-hero h5 {
            font-size: 1.05rem;
            margin-bottom: 1.5rem;
          }

          .demat-hero img {
            width: 85%;
          }
        }

        @media (max-width: 480px) {
          .demat-hero h1 {
            font-size: 1.6rem;
          }

          .demat-hero h5 {
            font-size: 1rem;
          }

          .demat-hero img {
            width: 90%;
          }
        }
      `}</style>

      <section className="container">
        <div className="demat-hero text-center">
          <div className="row">
            <div className="col-12">
              <h1>Open a Free Demat and Trading Account Online</h1>
              <h5>
                Start investing brokerage-free and join a community of
                <br />
                over 1.6+ crore investors and traders.
              </h5>
            </div>

            <div className="col-12 mt-4">
              <img
                src="media/images/account_open.svg"
                alt="Account Open"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
