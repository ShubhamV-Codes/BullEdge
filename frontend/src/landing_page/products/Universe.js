import { Link } from "react-router-dom";
function Universe() {
  return (
    <div className="container border-top">
      <div className="row text-center mb-3">
        <h1 className=" mt-5 mb-3 ">The BullEdge Universe</h1>
        <p className="text-muted mb-5 ps-5 pe-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row">
        <div className="col-md-4 col-12 ps-5 pe-5 mb-4">
          <div className="row mb-4">
            <img src="media/images/streakLogo.png" style={{ width: "35%" }} alt="Streak" />
            <p className="mt-3 text-muted fs-6">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="row">
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
        <div className="col-md-4 col-12 ps-5 pe-5 mb-4">
          <div className="row mb-4">
            <img
              src="media/images/smallcaseLogo.png"
              style={{ width: "40%" }} alt="Smallcase"
            />
            <p className="mt-3 text-muted fs-6">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="row">
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ width: "40%" }} alt="Zerodha Fundhouse"
            />
            <p className="mt-3 text-muted fs-6">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-12 ps-5 pe-5 mb-3">
          <div className="row mb-4">
            <img src="media/images/dittoLogo.png" style={{ width: "25%" }} alt="Ditto" />
            <p className="mt-4 text-muted fs-6">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
          <div className="row">
            <img src="media/images/tijori.svg" style={{ width: "35%" }} alt="Tijori" />
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
  );
}

export default Universe;
