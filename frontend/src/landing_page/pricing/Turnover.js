import React from "react";
function Turnover() {
  return (
    <div className="container">
      <div className="row mt-4">
        <h1 className="text-center mt-5 mb-5 ">Charges explained</h1>
        <div className="col-md-6 col-12 p-4 border-end ">
          <div>
            <h1 className="fs-4 text-center  mb-4 text-muted">
              Securities/Commodities transaction tax
            </h1>
            <p className="text-muted fs-6 textOver">
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
            <p className="text-muted fs-6 textOver">
              When trading at BullEdge, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab
            </p>
          </div>

          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">
              Transaction/Turnover Charges
            </h1>
            <p className="text-muted fs-6 textOver">
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p className="text-muted fs-6 textOver">
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </p>
            <p className="text-muted fs-6 textOver">
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </p>
            <p className="text-muted fs-6 textOver">
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </p>
            <p className="text-muted fs-6 textOver">
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover
            </p>
          </div>

          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">Call & trade</h1>
            <p className="text-muted fs-6 textOver">
              Additional charges of ₹50 per order for orders placed through a
              dealer at BullEdge including auto square off orders.
            </p>
          </div>

          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">Stamp charges</h1>
            <p className="text-muted fs-6 textOver">
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>
          </div>

          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">
              NRI brokerage charges
            </h1>
            <ul>
              <li className="text-muted fs-6 textOver">
                For a non-PIS account, 0.5% or ₹50 per executed order for equity
                and F&O (whichever is lower).
              </li>
              <li className="text-muted fs-6 textOver">
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li className="text-muted fs-6 textOver">
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
          </div>

          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">
              Account with debit balance
            </h1>
            <p className="text-muted fs-6 textOver">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
          </div>

          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">
              Charges for Investor's Protection Fund Trust (IPFT) by NSE
            </h1>
            <ul className="text-muted mt-2 textOver">
              <li>
                Equity and Futures - ₹10 per crore + GST of the traded value.
              </li>
              <li className="text-muted mt-2 textOver">
                Options - ₹50 per crore + GST traded value (premium value).
              </li>
              <li className="text-muted mt-2 textOver">
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </ul>
          </div>

          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">
              Margin Trading Facility (MTF)
            </h1>
            <ul>
              <li className="text-muted mt-2 textOver">
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                The interest is applied from T+1 day until the day MTF stocks
                are sold.
              </li>
              <li className="text-muted mt-2 textOver">
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </li>
              <li className="text-muted mt-2 textOver">
                MTF pledge charge: ₹15 + GST per pledge and unpledge request per
                ISIN.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">GST</h1>
            <p className="text-muted fs-6 textOver">
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>
          </div>
        </div>
        <div className="col-md-6 col-12 ps-5 pe-5 pt-2">
          
          
          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">SEBI Charges</h1>
            <p className="text-muted fs-6 textOver">
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
          </div>
          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">
              DP (Depository participant) charges
            </h1>
            <p className="text-muted fs-6 textOver">
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 BullEdge fee + ₹2.34 GST)
              is charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
            </p>
            <p className="text-muted fs-6 textOver">
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction on the CDSL fee.
            </p>
            <p className="text-muted fs-6 textOver">
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </p>
          </div>
          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">
              Pledging charges
            </h1>
            <p className="text-muted fs-6 textOver">
                A fee of ₹30 + GST applies for each pledge request per ISIN. This charge covers the 
  depository and processing costs required to mark your shares as pledged and ensure 
  they remain securely held until released.
            </p>
          </div>
          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">
              AMC (Account maintenance charges)
            </h1>
            <p className="text-muted fs-6 textOver">
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA.
            </p>
            <p className="text-muted fs-6 textOver">
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn more about AMC
            </p>
          </div>
          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">
              Corporate action order charges
            </h1>
            <p className="text-muted fs-6 textOver">
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through Console.
            </p>
          </div>
          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">
              Off-market transfer charges
            </h1>
            <p className="text-muted fs-6 text-center textOver"> ₹25 is charged per transaction for any off-market transfer. 
  This applies when securities are moved between demat accounts outside the exchange platform. </p>
          </div>
          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">
              Physical CMR request
            </h1>
            <p className="text-muted fs-6 textOver">
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>
          </div>
          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">
              Payment gateway charges
            </h1>
            <p className="text-muted fs-6 text-center textOver">
               A nominal charge of ₹9 + GST is applied on every payment made through the gateway. 
  This fee is not levied on UPI transfers, which remain completely free. 
            </p>
          </div>
          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">
              Delayed Payment Charges
            </h1>
            <p className="text-muted fs-6 textOver">
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading account.
            </p>
          </div>
          <div>
            <h1 className="fs-4 text-center mt-4 mb-4 text-muted">
              Trading using 3-in-1 account with block functionality
            </h1>
            <ul>
              <li className="text-muted mt-2 textOver">
  Delivery & MTF Brokerage: 0.5% per executed order, applicable when you buy shares and hold them beyond a day or trade using margin funding.
</li>
<li className="text-muted mt-2 textOver">
  Intraday Brokerage: 0.05% per executed order, charged only on trades squared off within the same trading session.
</li>

            </ul>
          </div>
        </div>
      </div>
      <div className="row">
         <h1 className="fs-4 text-center mt-5 mb-4 text-muted"> Disclaimer </h1>
        <p className="textOver">
          For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}

export default Turnover;
