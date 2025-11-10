import React from "react";

function Hero() {
  return (
    <>
      <style>{`
        .hero-container {
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          padding: 3rem 1rem;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.05);
        }

        .hero-image {
          width: 100%;
          max-width: 600px;
          height: auto;
          margin-bottom: 2rem;
          filter: drop-shadow(0 10px 25px rgba(0,0,0,0.08));
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: -0.5px;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #6c757d;
          max-width: 600px;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-btn {
          padding: 0.9rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          border: none;
          background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
          color: white;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .hero-btn:hover {
          background: linear-gradient(135deg, #0a58ca 0%, #084298 100%);
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2rem; }
          .hero-subtitle { font-size: 1.1rem; }
        }
      `}</style>

      <section className="hero-container container mt-4">
        <img src="media/images/landing.svg" alt="Hero" className="hero-image" />
        <h1 className="hero-title">Invest in Everything</h1>
        <p className="hero-subtitle">
          Online platform to invest in Stocks, Derivatives, Mutual Funds, and more.
        </p>
        <a href="/register" style={{ textDecoration: "none" }}>
          <button className="hero-btn">Signup Now</button>
        </a>
      </section>
    </>
  );
}

export default Hero;
