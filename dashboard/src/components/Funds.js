import { useState } from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  const [ setHovered] = useState(null);

  return (
    <div className="funds-container">
      <style>{`
        .funds-container {
          padding: 1.5rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          border-radius:20px;
        }

        .funds-header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          background: white;
          padding: 1.25rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        .funds-text {
          font-size: 1rem;
          font-weight: 500;
          color: #2d3748;
          margin: 0;
        }

        .funds-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .funds-btn {
          padding: 0.625rem 1.25rem;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #fff;
          text-decoration: none;
          display: inline-block;
        }

        .btn-green {
          background: linear-gradient(135deg, #48c238 0%, #31a24a 100%);
          box-shadow: 0 4px 12px rgba(72, 194, 55, 0.3);
        }

        .btn-green:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(72, 194, 55, 0.4);
        }

        .btn-blue {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .btn-blue:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
        }

        .funds-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .funds-col {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .funds-col:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }

        .funds-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 1.25rem;
        }

        .data-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0;
          border-bottom: 1px solid #e2e8f0;
          font-size: 0.9rem;
          color: #4a5568;
        }

        .data-row:last-child {
          border-bottom: none;
        }

        .data-label {
          margin: 0;
          flex: 1;
        }

        .data-value {
          margin: 0;
          font-weight: 600;
          color: #2d3748;
          text-align: right;
        }

        .data-value.highlight {
          color: #48c238;
          font-weight: 700;
        }

        .funds-hr {
          border: none;
          height: 1px;
          background: #e2e8f0;
          margin: 1rem 0;
        }

        .commodity-section {
          text-align: center;
          padding: 3rem 1.25rem;
        }

        .commodity-text {
          font-size: 1rem;
          color: #718096;
          margin-bottom: 1rem;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .funds-container {
            padding: 1.25rem;
          }

          .funds-row {
            grid-template-columns: 1fr;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .funds-container {
            padding: 1rem;
          }

          .funds-header {
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem;
          }

          .funds-text {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
          }

          .funds-buttons {
            width: 100%;
            justify-content: flex-start;
          }

          .funds-btn {
            flex: 1;
            min-width: 120px;
            text-align: center;
            padding: 0.75rem 1rem;
            font-size: 0.85rem;
          }

          .funds-row {
            gap: 1rem;
            margin-top: 1rem;
          }

          .funds-col {
            padding: 1.25rem;
          }

          .funds-title {
            font-size: 1.125rem;
            margin-bottom: 1rem;
          }

          .data-row {
            font-size: 0.85rem;
            padding: 0.65rem 0;
          }

          .commodity-section {
            padding: 2rem 1rem;
          }

          .commodity-text {
            font-size: 0.9rem;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .funds-container {
            padding: 0.75rem;
          }

          .funds-header {
            padding: 0.875rem;
            gap: 0.75rem;
          }

          .funds-text {
            font-size: 0.85rem;
          }

          .funds-buttons {
            flex-direction: column;
            width: 100%;
          }

          .funds-btn {
            width: 100%;
            text-align: center;
          }

          .funds-row {
            grid-template-columns: 1fr;
          }

          .funds-col {
            padding: 1rem;
          }

          .funds-title {
            font-size: 1rem;
          }

          .data-row {
            font-size: 0.8rem;
            flex-wrap: wrap;
          }

          .data-label {
            flex: 1 1 100%;
            margin-bottom: 0.25rem;
          }

          .data-value {
            flex: 1 1 100%;
            text-align: left;
          }
        }
      `}</style>

      {/* Header Section */}
      <div className="funds-header">
        <p className="funds-text">Instant, zero-cost fund transfers with UPI</p>
        <div className="funds-buttons">
          <Link to="/not-available" className="funds-btn btn-green">
            Add funds
          </Link>
          <Link to="/not-available" className="funds-btn btn-blue">
            Withdraw
          </Link>
        </div>
      </div>

      {/* Equity + Commodity */}
      <div className="funds-row">
        {/* Equity Section */}
        <div
          className="funds-col"
          onMouseEnter={() => setHovered("equity")}
          onMouseLeave={() => setHovered(null)}
        >
          <p className="funds-title">Equity</p>

          <div className="data-row">
            <p className="data-label">Available margin</p>
            <p className="data-value highlight">4,043.10</p>
          </div>
          <div className="data-row">
            <p className="data-label">Used margin</p>
            <p className="data-value">3,757.30</p>
          </div>
          <div className="data-row">
            <p className="data-label">Available cash</p>
            <p className="data-value">4,043.10</p>
          </div>

          <hr className="funds-hr" />

          <div className="data-row">
            <p className="data-label">Opening Balance</p>
            <p className="data-value">0.00</p>
          </div>
          <div className="data-row">
            <p className="data-label">Payout</p>
            <p className="data-value">0.00</p>
          </div>
          <div className="data-row">
            <p className="data-label">Payin</p>
            <p className="data-value">0.00</p>
          </div>
          <div className="data-row">
            <p className="data-label">SPAN</p>
            <p className="data-value">0.00</p>
          </div>
          <div className="data-row">
            <p className="data-label">Delivery margin</p>
            <p className="data-value">0.00</p>
          </div>
          <div className="data-row">
            <p className="data-label">Exposure</p>
            <p className="data-value">0.00</p>
          </div>
          <div className="data-row">
            <p className="data-label">Options premium</p>
            <p className="data-value">0.00</p>
          </div>

          <hr className="funds-hr" />

          <div className="data-row">
            <p className="data-label">Collateral (Liquid funds)</p>
            <p className="data-value">0.00</p>
          </div>
          <div className="data-row">
            <p className="data-label">Collateral (Equity)</p>
            <p className="data-value">0.00</p>
          </div>
          <div className="data-row">
            <p className="data-label">Total Collateral</p>
            <p className="data-value">0.00</p>
          </div>
        </div>

        {/* Commodity Section */}
        <div
          className="funds-col"
          onMouseEnter={() => setHovered("commodity")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="commodity-section">
            <p className="commodity-text">
              You don't have a commodity account
            </p>
            <Link to="https://bull-edge.vercel.app/register" className="funds-btn btn-blue">
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;