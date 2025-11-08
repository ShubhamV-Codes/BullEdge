import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook

function OpenAccount() {
  const navigate = useNavigate(); // ✅ allows redirect without full reload

  return (
    <div className="container mt-4 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3">Open a BullEdge account</h1>
        <p>
          Modern platform and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades
        </p>

        <button
          onClick={() => navigate("/register")} // ✅ takes user to backend-connected signup page
          className="btn btn-primary fs-5 signup-btn mt-3"
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
