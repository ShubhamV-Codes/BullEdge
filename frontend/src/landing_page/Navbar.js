import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <style>{`
        .navbar {
          background-color: #ffffff !important;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          padding: 0.8rem 1rem;
        }

        .navbar-brand {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0d6efd !important;
          display: flex;
          align-items: center;
        }

        .navbar-brand img {
          margin-right: 10px;
        }

        .nav-link {
          color: #212529 !important;
          font-weight: 500;
          font-size: 1rem;
          position: relative;
          transition: color 0.3s ease, transform 0.2s ease;
        }

        .nav-link:hover {
          color: #0d6efd !important;
          transform: translateY(-1px);
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #0d6efd;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .navbar-toggler {
          border: none;
        }

        .navbar-toggler:focus {
          box-shadow: none;
        }

        @media (max-width: 992px) {
          .navbar-nav {
            text-align: center;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            margin-top: 0.5rem;
          }

          .nav-item {
            margin: 0.4rem 0;
          }
        }
      `}</style>

      <nav className="navbar navbar-expand-lg fixed-top border-bottom">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="media/images/bull-market (1).png"
              alt="BullEdge Logo"
              style={{ width: "40px", height: "30px" }}
            />
            BullEdge
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link ms-4" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-4" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-4" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-4" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-4" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
