import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .open-account-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          padding: 4rem 2rem;
          text-align: center;
          margin-top: 4rem;
          margin-bottom: 5rem;
        }

        .open-account-heading {
          font-size: 2.4rem;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: -0.5px;
          margin-bottom: 1rem;
        }

        .open-account-text {
          font-size: 1.1rem;
          color: #555;
          max-width: 700px;
          margin: 0 auto 2rem;
          line-height: 1.7;
        }

        .open-account-btn {
          background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          padding: 0.9rem 3rem;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .open-account-btn:hover {
          background: linear-gradient(135deg, #0a58ca 0%, #084298 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(13, 110, 253, 0.3);
        }

        .open-account-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .open-account-heading {
            font-size: 1.9rem;
          }
          .open-account-text {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .open-account-heading {
            font-size: 1.6rem;
          }
          .open-account-btn {
            width: 100%;
          }
        }
      `}</style>

      <section className="container">
        <div className="open-account-section">
          <h1 className="open-account-heading">Open a BullEdge Account</h1>

          <p className="open-account-text">
            Modern trading platform and apps — ₹0 investments and a flat ₹20 fee
            for intraday and F&O trades. Join millions investing smarter.
          </p>

          <button
            onClick={() => navigate("/register")}
            className="open-account-btn"
          >
            Signup Now
          </button>
        </div>
      </section>
    </>
  );
}

export default OpenAccount;
