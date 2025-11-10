import React from "react";

function Hero() {
  return (
    <>
      <style>{`
        .charges-hero {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          padding: 4rem 2rem;
          margin-top: 3rem;
          margin-bottom: 3rem;
        }

        .charges-hero h2 {
          font-size: 2.4rem;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: -0.5px;
          margin-bottom: 1.5rem;
        }

        .charges-hero h4 {
          font-size: 1.2rem;
          color: #6c757d;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .charges-hero {
            padding: 3rem 1.5rem;
          }

          .charges-hero h2 {
            font-size: 2rem;
          }

          .charges-hero h4 {
            font-size: 1.05rem;
          }
        }

        @media (max-width: 480px) {
          .charges-hero {
            padding: 2.5rem 1rem;
          }

          .charges-hero h2 {
            font-size: 1.7rem;
          }

          .charges-hero h4 {
            font-size: 1rem;
          }
        }
      `}</style>

      <section className="container text-center charges-hero">
        <h2>Charges</h2>
        <h4 className="text-muted">List of all charges and taxes</h4>
      </section>
    </>
  );
}

export default Hero;
