import { Link } from "react-router-dom";

function Universe() {
  return (
    <>
      <style>{`
        .hover-box {
          border-radius: 12px;
          transition: all 0.25s ease;
          padding: 0.5rem;
        }

        .hover-box:hover {
          background-color: #f8f9fa;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          transform: translateY(-3px);
        }
          .signup-btn {
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
      `}</style>

      <div className="container border-top">
        <div className="row text-center mb-3">
          <h1 className="mt-5 mb-3">The BullEdge Universe</h1>
          <p className="text-muted mb-5 ps-5 pe-5">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4 col-12 ps-5 pe-5 mb-4">
            <div className="row mb-4 hover-box">
              <img
                src="media/images/streakLogo.png"
                style={{ width: "35%" }}
                alt="Streak"
              />
              <p className="mt-3 text-muted fs-6">
                Systematic trading platform that allows you to create and backtest
                strategies without coding.
              </p>
            </div>
            <div className="row hover-box">
              <img
                src="media/images/sensibullLogo.svg"
                style={{ width: "40%" }}
                alt="Sensibull"
              />
              <p className="mt-4 text-muted fs-6">
                Options trading platform that lets you create strategies, analyze
                positions, and examine data points like open interest, FII/DII,
                and more.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 col-12 ps-5 pe-5 mb-4">
            <div className="row mb-4 hover-box">
              <img
                src="media/images/smallcaseLogo.png"
                style={{ width: "40%" }}
                alt="Smallcase"
              />
              <p className="mt-3 text-muted fs-6">
                Thematic investing platform that helps you invest in diversified
                baskets of stocks or ETFs.
              </p>
            </div>
            <div className="row hover-box">
              <img
                src="media/images/zerodhaFundhouse.png"
                style={{ width: "40%" }}
                alt="Zerodha Fundhouse"
              />
              <p className="mt-3 text-muted fs-6">
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-md-4 col-12 ps-5 pe-5 mb-3">
            <div className="row mb-4 hover-box">
              <img
                src="media/images/dittoLogo.png"
                style={{ width: "25%" }}
                alt="Ditto"
              />
              <p className="mt-4 text-muted fs-6">
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </p>
            </div>
            <div className="row hover-box">
              <img
                src="media/images/tijori.svg"
                style={{ width: "35%" }}
                alt="Tijori"
              />
              <p className="mt-2 text-muted fs-6">
                Investment research platform that offers detailed insights on
                stocks, sectors, supply chains, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="row text-center mt-4">
          <Link to="/register">
            <button className="pt-2 btn btn-primary signup-btn fs-5 mb-4 mt-3">
              Signup Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Universe;
