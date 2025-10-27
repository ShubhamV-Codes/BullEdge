import React from "react";
function Charges() {
  return (
    <div className="container">
      <div className="row mb-3 ">
        <h1 className="text-center fs-3 p-3 mt-3">Charges for account opening</h1>
      </div>

      <div className="row p-3">
        <div className="col-2"></div>
        <div className="col-md-8 col-12">
          <table className="table table-bordered ">
            <thead className="table-light">
              <tr>
                <th className="text-center">Type of account</th>
                <th className="text-center">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">Online account</td>
                <td className="text-center">
                  <span className="badge bg-success">FREE</span>
                </td>
              </tr>
              <tr>
                <td className="text-center ">Offline account</td>
                <td className="text-center">
                  <span className="badge bg-success">FREE</span>
                </td>
              </tr>
              <tr>
                <td className="text-center">NRI account (offline only)</td>
                <td className="text-center">₹ 500</td>
              </tr>
              <tr>
                <td className="text-center">
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td className="text-center">₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-2"></div>
      </div>

      <div className="row mb-3 ">
        <h1 className="text-center fs-3 p-3 mt-3">Demat AMC (Annual Maintenance Charge)</h1>
      </div>

      <div className="row p-3">
        <div className="col-2"></div>
        <div className="col-md-8 col-12">
          <table className="table table-bordered ">
            <thead className="table-light">
              <tr>
                <th className="text-center">Value of holdings</th>
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
                <td className="text-center"> ₹ 4 lakh - ₹ 10 lakh </td>
                <td className="text-center">₹ 100 per year, charged quarterly</td>
              </tr>
              <tr>
                <td className="text-center">
                 Above ₹ 10 lakh
                </td>
                <td className="text-center">₹ 300 per year, charged quarterly</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-2"></div>
      </div>



    
    
      <div className="row mb-3 "> </div>

      <div className="row p-3">
        <div className="col-2"></div>
        <div className="col-md-8  col-12 text-center">
           <p className="text-muted" style={{fontSize:"85%"}} > * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, click here.</p>
        </div>

        <div className="col-2"></div>
      </div>
    

      <div className="row mb-3 ">
        <h1 className="text-center fs-3 p-3 mt-3">Charges for optional value added services</h1>
      </div>

      <div className="row p-3">
        <div className="col-2"></div>
        <div className="col-md-8 col-12">
          <table className="table table-bordered ">
            <thead className="table-light">
              <tr>
                <th className="text-center">Services</th>
                <th className="text-center">BIlling Frequency</th>
                <th className="text-center">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">Tickertape</td>
                <td className="text-center">Monthly / Annual</td>
                <td className="text-center">Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr>
                <td className="text-center">Smallcase</td>
                <td className="text-center">Per transaction</td>
                <td className="text-center">Buy & Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <td className="text-center">Kite Connect</td>
                <td className="text-center">Monthly</td>
                <td className="text-center">Connect: 500 | Personal: Free</td>
              </tr>
              
            </tbody>
          </table>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Charges;
