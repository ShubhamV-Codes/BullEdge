import React from "react";

function CreateTicket() {
  return (
    <>
      <style>{`
        .ticket-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
          padding: 3rem 2rem;
          margin-top: 3rem;
        }

        .ticket-heading {
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 3rem;
        }

        .ticket-column {
          transition: all 0.25s ease;
          border-right: 1px solid #e5e5e5;
        }

        .ticket-column:last-child {
          border-right: none;
        }

        .ticket-column:hover {
          background-color: #f9fafc;
          box-shadow: 0 5px 18px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .ticket-column h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0d6efd;
          margin-bottom: 1.5rem;
        }

        .ticket-column i {
          color: #0d6efd;
        }

        .support-links {
          font-size: 1rem;
          font-weight: 500;
          color: #333;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 0.6rem;
          transition: all 0.2s ease;
        }

        .support-links:hover {
          color: #0d6efd;
          transform: translateX(3px);
        }

        @media (max-width: 768px) {
          .ticket-section {
            padding: 2rem 1rem;
          }

          .ticket-heading {
            font-size: 1.6rem;
            margin-bottom: 2rem;
          }

          .ticket-column {
            border-right: none !important;
            border-bottom: 1px solid #eee;
          }

          .ticket-column:last-child {
            border-bottom: none;
          }
        }
      `}</style>

      <section className="container">
        <div className="ticket-section">
          <div className="row">
            <h1 className="ticket-heading text-center">
              To create a ticket, select a relevant topic
            </h1>
          </div>

          <div className="row text-center">
            {/* Account Opening */}
            <div className="col-md-4 col-12 p-4 ticket-column">
              <h3>
                <i className="fa-solid fa-square-plus"></i>&nbsp;Account Opening
              </h3>
              <a className="support-links" href="/signup">
                Online Account Opening
              </a>
              <br />
              <a className="support-links" href="/not-available">
                Charges at BullEdge
              </a>
              <br />
              <a className="support-links" href="/not-available">
                Offline Account Opening
              </a>
              <br />
              <a className="support-links" href="/not-available">
                NRI Account Opening
              </a>
              <br />
              <a className="support-links" href="/not-available">
                BullEdge SBI Bank
              </a>
              <br />
              <a className="support-links" href="/signup">
                Getting Started
              </a>
            </div>

            {/* Your BullEdge Account */}
            <div className="col-md-4 col-12 p-4 ticket-column">
              <h3>
                <i className="fa-solid fa-user"></i>&nbsp;Your BullEdge Account
              </h3>
              <a className="support-links" href="/not-available">
                Login Credentials
              </a>
              <br />
              <a className="support-links" href="https://vistara-lime.vercel.app">
                Vistara
              </a>
              <br />
              <a className="support-links" href="/not-available">
                DP ID and Bank Details
              </a>
              <br />
              <a className="support-links" href="/not-available">
                Your Profile
              </a>
              <br />
              <a className="support-links" href="/not-available">
                Transfer & Conversion of Shares
              </a>
            </div>

            {/* Your BullEdge Graphs */}
            <div className="col-md-4 col-12 p-4 ticket-column">
              <h3>
                <i className="fa-solid fa-chart-simple"></i>&nbsp;Your BullEdge Graphs
              </h3>
              <a className="support-links" href="/not-available">
                Margin/Leverage, Product & Order Types
              </a>
              <br />
              <a className="support-links" href="/not-available">
                Trading FAQs
              </a>
              <br />
              <a className="support-links" href="/not-available">
                Corporate Actions
              </a>
              <br />
              <a className="support-links" href="/not-available">
                Sentinel
              </a>
              <br />
              <a className="support-links" href="/not-available">
                Stockesports+
              </a>
              <br />
              <a className="support-links" href="/not-available">
                GTT
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateTicket;
