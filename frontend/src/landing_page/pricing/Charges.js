import React from "react";

function Charges() {
  return (
    <>
      <style>{`
        .charges-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          padding: 4rem 2rem;
          margin-top: 3rem;
        }

        .charges-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .charges-table {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          background-color: #fff;
        }

        .charges-table thead {
          background-color: #f1f4f8;
          font-weight: 600;
          color: #333;
        }

        .charges-table th,
        .charges-table td {
          vertical-align: middle;
          padding: 1rem !important;
        }

        .charges-table tbody tr:hover {
          background-color: #f9fafc;
          transition: background-color 0.2s ease;
        }

        .badge {
          font-size: 0.9rem;
          padding: 0.5em 0.8em;
          border-radius: 50px;
        }

        .charges-note {
          font-size: 0.9rem;
          color: #6c757d;
          line-height: 1.6;
          margin-top: 1.5rem;
        }

        @media (max-width: 768px) {
          .charges-section {
            padding: 2.5rem 1rem;
          }

          .charges-title {
            font-size: 1.6rem;
          }

          .charges-table th,
          .charges-table td {
            font-size: 0.9rem;
          }

          .charges-note {
            font-size: 0.8rem;
          }
        }
      `}</style>

      <section className="container charges-section">
        {/* Account Opening Charges */}
        <div className="row">
          <h1 className="charges-title">Charges for Account Opening</h1>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-md-8 col-12">
            <table className="table table-bordered charges-table">
              <thead>
                <tr>
                  <th className="text-center">Type of Account</th>
                  <th className="text-center">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">Online Account</td>
                  <td className="text-center">
                    <span className="badge bg-success">FREE</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">Offline Account</td>
                  <td className="text-center">
                    <span className="badge bg-success">FREE</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">NRI Account (Offline Only)</td>
                  <td className="text-center">₹ 500</td>
                </tr>
                <tr>
                  <td className="text-center">
                    Partnership, LLP, HUF, or Corporate Accounts (Offline Only)
                  </td>
                  <td className="text-center">₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* AMC Charges */}
        <div className="row">
          <h1 className="charges-title">
            Demat AMC (Annual Maintenance Charge)
          </h1>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-md-8 col-12">
            <table className="table table-bordered charges-table">
              <thead>
                <tr>
                  <th className="text-center">Value of Holdings</th>
                  <th className="text-center">AMC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">Up to ₹ 4 lakh</td>
                  <td className="text-center">
                    <span className="badge bg-success">FREE</span>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">₹ 4 lakh - ₹ 10 lakh</td>
                  <td className="text-center">
                    ₹ 100 per year, charged quarterly
                  </td>
                </tr>
                <tr>
                  <td className="text-center">Above ₹ 10 lakh</td>
                  <td className="text-center">
                    ₹ 300 per year, charged quarterly
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="text-center charges-note">
              * Lower AMC is applicable only if the account qualifies as a Basic
              Services Demat Account (BSDA). BSDA account holders cannot hold
              more than one demat account. To learn more about BSDA, click here.
            </p>
          </div>
        </div>

        {/* Optional Services */}
        <div className="row">
          <h1 className="charges-title">
            Charges for Optional Value Added Services
          </h1>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8 col-12">
            <table className="table table-bordered charges-table">
              <thead>
                <tr>
                  <th className="text-center">Services</th>
                  <th className="text-center">Billing Frequency</th>
                  <th className="text-center">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">Tickertape</td>
                  <td className="text-center">Monthly / Annual</td>
                  <td className="text-center">Free: ₹0 | Pro: ₹249 / ₹2399</td>
                </tr>
                <tr>
                  <td className="text-center">Smallcase</td>
                  <td className="text-center">Per Transaction</td>
                  <td className="text-center">
                    Buy & Invest More: ₹100 | SIP: ₹10
                  </td>
                </tr>
                <tr>
                  <td className="text-center">Kite Connect</td>
                  <td className="text-center">Monthly</td>
                  <td className="text-center">
                    Connect: ₹500 | Personal: Free
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Charges;
