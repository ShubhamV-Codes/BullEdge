import React from "react";

function Hero() {
  return (
    <>
      <style>{`
        .support-hero {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          padding: 4rem 3rem;
          margin-top: 2rem;
        }

        .support-hero h2 {
          color: #1a1a1a;
        }

        .search-heading,
        .featured-heading {
          font-weight: 600;
          color: #111;
        }

        .search-input {
          border: 1px solid #ccc;
          border-radius: 50px;
          padding: 0.9rem 1.5rem;
          font-size: 1rem;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04);
          transition: all 0.2s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.2);
        }

        .help-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem 1.2rem;
        }

        .help-link {
          font-weight: 500;
          color: #0d6efd;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .help-link:hover {
          color: #084298;
        }

        .featured-heading {
          color: #1a1a1a;
        }

        .featured-list {
          padding-left: 1.2rem;
        }

        .featured-link {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: all 0.25s ease;
        }

        .featured-link:hover {
          color: #0d6efd;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .support-hero {
            padding: 2rem 1rem;
          }

          .search-input {
            font-size: 0.95rem;
            padding: 0.75rem 1.2rem;
          }

          .featured-heading {
            margin-top: 2rem;
          }

          .help-links {
            gap: 0.6rem 1rem;
          }
        }
      `}</style>

      <section className="container-fluid support-hero">
        {/* Header */}
        <div className="row">
          <h2
            className="text-center"
            style={{
              textDecoration: "underline",
              marginTop: "10px",
              marginBottom: "30px",
            }}
          >
            <i>Bull-Support</i>
          </h2>
        </div>

        {/* Main Content */}
        <div className="row px-3">
          {/* Left: Search */}
          <div className="col-md-6 col-12 mt-2">
            <h2 className="fs-4 mb-4 search-heading">
              Search for an answer or browse help topics to create a ticket
            </h2>
            <input
              type="text"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
              className="form-control search-input mb-4"
            />
            <div className="help-links">
              <a href="/not-available" className="help-link">
                Track account opening
              </a>
              <a href="/not-available" className="help-link">
                Track segment activation
              </a>
              <a href="/not-available" className="help-link">
                Intraday
              </a>
              <a href="/not-available" className="help-link">
                Margins
              </a>
              <a
                href="https://bull-edge-kite.vercel.app"
                className="help-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kite user manual
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="col-md-1"></div>

          {/* Right: Featured */}
          <div className="col-md-5 col-12 mt-3">
            <h2 className="fs-4 mb-4 featured-heading">Featured</h2>
            <ol className="featured-list">
              <li className="mb-3">
                <a href="/not-available" className="featured-link">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href="/not-available" className="featured-link">
                  Latest Intraday Leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
