import React from "react";

function Education() {
  return (
    <>
      <style>{`
        .education-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          padding: 3rem 2rem;
          margin-top: 3rem;
        }

        .education-heading {
          font-size: 2.3rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
        }

        .education-text {
          font-size: 1.05rem;
          color: #555;
          line-height: 1.8;
        }

        .education-link {
          color: #0d6efd;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          margin-top: 1rem;
          transition: color 0.3s ease;
        }

        .education-link:hover {
          color: #084298;
        }

        .education-image {
          max-width: 80%;
          filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.08));
        }

        @media (max-width: 768px) {
          .education-heading { font-size: 1.9rem; }
        }
      `}</style>

      <section className="container py-5">
        <div className="education-section">
          <div className="row align-items-center">
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src="media/images/education.svg"
                alt="Education"
                className="education-image img-fluid"
              />
            </div>

            <div className="col-md-6">
              <h1 className="education-heading">
                Free and Open Market Education
              </h1>

              <p className="education-text">
                <strong>Varsity</strong> — the largest online stock market education
                resource in the world, covering everything from basics to advanced trading.
              </p>
              <a href="/not-available" className="education-link">
                Visit Varsity <i className="fa fa-long-arrow-right ms-1" />
              </a>

              <p className="education-text mt-4">
                <strong>Trading Q&A</strong> — India’s most active trading and investment
                community for all your market-related queries.
              </p>
              <a href="/not-available" className="education-link">
                Visit Trading Q&A <i className="fa fa-long-arrow-right ms-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
