import React from 'react';
import { Link} from 'react-router-dom';
function Footer() {
  return (
    <div className="container border-top mt-5">
      <div className="row">
        <div className="col-md-3 col-6 md-5 mt-4">
          <a className="navbar-brand " href="/"><img src="media/images/bull-market (1).png" style={{ width: "40px", height: "30px" }} alt="BullEdge_logo" /> <b className="p-2">BullEdge </b></a>
          <p className="mt-3"><b>BullEdge:</b> <i>A Fintech Corp.&copy;</i> <br /> &nbsp; &nbsp; &nbsp;All rights reserved. </p>

          <a
  href="https://x.com/bulledgedotcom"
  className="fa-brands fa-x-twitter ms-4 social-media-icons"
  aria-label="Twitter"
  target="_blank"
  rel="noopener noreferrer"
></a>

<a
  href="https://instagram.com/bulledgedotcom"
  className="fa-brands fa-instagram ms-3 social-media-icons"
  aria-label="Instagram"
  target="_blank"
  rel="noopener noreferrer"
></a>

<a
  href="https://youtube.com/@bulledgedotcom"
  className="fa-brands fa-youtube ms-3 social-media-icons"
  aria-label="YouTube"
  target="_blank"
  rel="noopener noreferrer"
></a>
</div>


        <div className="col-md-3 col-6 mb-3 p-4 company-nav-links">

          <h5>Company</h5>
          <a href="/about">About </a><br />
          <a href="/product">Product</a><br />
          <a href="/pricing">Pricing</a><br />
          <a href="/not-available">Careers</a><br />
          <a href="/not-available">Referral Programme</a><br />

        </div>
        <div className="col-md-3 col-6 p-4 support-nav-links">

          <h5>Support</h5>
          <a href="#"> Contact </a><br />
          <a href="/not-available"> Support Portal </a><br />
          <a href="/not-available"> B-Connect blog </a><br />
          <a href="/not-available"> List of charges </a><br />
          <a href="/not-available"> Download & resources </a><br />
        </div>
        <div className="col-md-3 col-6 p-4 account-nav-links">
          <h5>Account</h5>
          <Link to="/register"> Open a account </Link><br />
          <Link to="/not-available">Fund Transfer </Link><br />
          <Link to="/not-available"> 60 Days challenge </Link><br />
        </div>
      </div>

      {/* <div className="row mt-5 fs-6 text-small text-muted ">

        <p>
          BullEdge is a fintech platform designed to make investing and trading simple, accessible, and effective for everyone.
          By combining market insights, real-time analytics, and powerful tools into one clean, easy-to-use dashboard,
          we aim to provide users with everything they need to make informed financial decisions.
        </p>

        <p>
          Our platform offers transparent pricing, performance tracking, and up-to-the-minute data, putting control firmly in your hands.
          We focus on clarity, not clutter, ensuring that every feature is intuitive and easy to understand.

        </p>

        <p>
          At BullEdge, innovation drives everything we do. Our platform continuously evolves to incorporate advanced analytics, risk management tools, and personalized insights, giving users a competitive edge in the financial markets.
          We prioritize security and reliability, ensuring that every transaction and data point is protected with industry-standard protocols.
          .
        </p>

      </div> */}

    </div>

  );
}

export default Footer;