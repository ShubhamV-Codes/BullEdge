import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <style>{`
        .footer-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-top: 1px solid #e0e0e0;
          padding: 4rem 2rem 2rem;
          margin-top: 4rem;
        }

        .footer-logo img {
          width: 40px;
          height: 30px;
        }

        .footer-logo-text {
          font-weight: 700;
          font-size: 1.25rem;
          color: #1a1a1a;
          text-decoration: none;
        }

        .footer-description {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
          margin-top: 1rem;
        }

        .footer-heading {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .footer-link {
          display: block;
          font-size: 0.95rem;
          color: #555;
          text-decoration: none;
          margin-bottom: 0.5rem;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #0d6efd;
        }

        .footer-bottom {
          border-top: 1px solid #e0e0e0;
          text-align: center;
          margin-top: 3rem;
          padding-top: 1rem;
          font-size: 0.9rem;
          color: #888;
        }

        .social-links {
          margin-top: 1rem;
        }

        .social-icon {
          font-size: 1.2rem;
          color: #555;
          margin-right: 1rem;
          transition: color 0.2s ease;
        }

        .social-icon:hover {
          color: #0d6efd;
        }

        @media (max-width: 768px) {
          .footer-section {
            padding: 3rem 1rem;
          }
          .footer-heading {
            margin-top: 2rem;
          }
        }
      `}</style>

      <footer className="footer-section container-fluid">
        <div className="container">
          <div className="row">
            {/* --- Logo + Description --- */}
            <div className="col-md-3 col-12 mb-4">
              <div className="footer-logo">
                <a href="/" className="d-flex align-items-center text-decoration-none">
                  <img src="media/images/bull-market (1).png" alt="BullEdge Logo" />
                  <span className="footer-logo-text ms-2">BullEdge</span>
                </a>
              </div>
              <p className="footer-description mt-3">
                <strong>BullEdge:</strong> <i>A Fintech Corp.&copy;</i>
                <br />
                Empowering investors with modern tools and transparent pricing.
              </p>

              <div className="social-links">
                <a
                  href="https://x.com/bulledgedotcom"
                  className="social-icon fa-brands fa-x-twitter"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                <a
                  href="https://instagram.com/bulledgedotcom"
                  className="social-icon fa-brands fa-instagram"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                <a
                  href="https://youtube.com/@bulledgedotcom"
                  className="social-icon fa-brands fa-youtube"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
            </div>

            {/* --- Company Links --- */}
            <div className="col-md-3 col-6 mb-3">
              <h5 className="footer-heading">Company</h5>
              <a href="/about" className="footer-link">About</a>
              <a href="/product" className="footer-link">Product</a>
              <a href="/pricing" className="footer-link">Pricing</a>
              <a href="/not-available" className="footer-link">Careers</a>
              <a href="/not-available" className="footer-link">Referral Program</a>
            </div>

            {/* --- Support Links --- */}
            <div className="col-md-3 col-6 mb-3">
              <h5 className="footer-heading">Support</h5>
              <a href="/not-available" className="footer-link">Contact</a>
              <a href="/not-available" className="footer-link">Support Portal</a>
              <a href="/not-available" className="footer-link">B-Connect Blog</a>
              <a href="/not-available" className="footer-link">List of Charges</a>
              <a href="/not-available" className="footer-link">Downloads & Resources</a>
            </div>

            {/* --- Account Links --- */}
            <div className="col-md-3 col-12 mb-3">
              <h5 className="footer-heading">Account</h5>
              <Link to="/register" className="footer-link">Open an Account</Link>
              <Link to="/not-available" className="footer-link">Fund Transfer</Link>
              <Link to="/not-available" className="footer-link">60-Day Challenge</Link>
            </div>
          </div>

          {/* --- Bottom Text --- */}
          <div className="footer-bottom">
            © {new Date().getFullYear()} BullEdge. All rights reserved. Built with ❤️ for investors.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
