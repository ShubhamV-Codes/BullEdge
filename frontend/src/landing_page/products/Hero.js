import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <style>{`
        .product-hero {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          padding: 4rem 2rem;
          text-align: center;
          margin-top: 2rem;
          margin-bottom: 3rem;
        }

        .product-hero h1 {
          font-size: 2.8rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }

        .product-hero p {
          color: #555;
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .product-hero .sub-text {
          font-size: 1.25rem;
          color: #333;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .product-hero a {
          color: #0d6efd;
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .product-hero a:hover {
          color: #084298;
          border-color: #084298;
        }

        @media (max-width: 768px) {
          .product-hero {
            padding: 3rem 1rem;
          }
          .product-hero h1 {
            font-size: 2rem;
          }
          .product-hero .sub-text {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <section className="container">
        <div className="product-hero">
          <h1>BullEdge Products</h1>
          <p className="sub-text">Sleek, modern, and intuitive trading platforms</p>
          <p>
            Check out our{" "}
            <Link
              to="https://bull-edge-kite.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              investment offerings →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
