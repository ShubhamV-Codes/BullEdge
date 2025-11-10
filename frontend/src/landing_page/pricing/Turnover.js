import React from "react";

function Turnover() {
  return (
    <>
      <style>{`
        .turnover-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          padding: 4rem 2rem;
          margin-top: 3rem;
        }

        .turnover-heading {
          font-size: 2.2rem;
          font-weight: 700;
          text-align: center;
          color: #1a1a1a;
          margin-bottom: 2rem;
        }

        .turnover-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          text-align: center;
          margin-bottom: 3rem;
        }

        .turnover-col {
          padding: 1.5rem 2rem;
          border-radius: 12px;
        }

        .turnover-card {
          background: #fff;
          border-radius: 12px;
          padding: 1.8rem 1.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          margin-bottom: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .turnover-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
        }

        .turnover-card h1 {
          font-size: 1.3rem;
          color: #212529;
          font-weight: 600;
          text-align: center;
          margin-bottom: 1rem;
        }

        .turnover-card p,
        .turnover-card li {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.7;
        }

        .turnover-card ul {
          padding-left: 1.2rem;
        }

        .turnover-card li {
          margin-bottom: 0.5rem;
        }

        .turnover-disclaimer {
          font-size: 0.9rem;
          color: #6c757d;
          line-height: 1.7;
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          padding: 2rem;
          margin-top: 3rem;
        }

        @media (max-width: 768px) {
          .turnover-section {
            padding: 2.5rem 1rem;
          }

          .turnover-card h1 {
            font-size: 1.1rem;
          }

          .turnover-card p,
          .turnover-card li {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <section className="container turnover-section">
        <h1 className="turnover-heading">Charges Explained</h1>

        <div className="row">
          {/* LEFT COLUMN */}
          <div className="col-md-6 col-12 turnover-col border-end">
            {[
              {
                title: "Securities/Commodities Transaction Tax",
                text: [
                  "Tax by the government when transacting on the exchanges. Charged on both buy and sell sides when trading equity delivery, and only on sell side for intraday or F&O.",
                  "When trading at BullEdge, STT/CTT can often exceed the brokerage we charge — important to monitor this closely.",
                ],
              },
              {
                title: "Transaction/Turnover Charges",
                text: [
                  "Charged by exchanges (NSE, BSE, MCX) on transaction value.",
                  "BSE revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore from 01.01.2016.",
                  "BSE charges ₹1,00,000 per crore in SS and ST groups, and ₹375 per crore for A, B and other non-exclusive scrips since Dec 2022.",
                  "BSE also revised transaction charges in M, MT, TS, and MS groups to ₹275 per crore of gross turnover.",
                ],
              },
              {
                title: "Call & Trade",
                text: [
                  "Additional ₹50 per order for orders placed through a BullEdge dealer, including auto square-offs.",
                ],
              },
              {
                title: "Stamp Charges",
                text: [
                  "Government of India stamp duty as per the Indian Stamp Act of 1899, applicable on instruments traded on exchanges and depositories.",
                ],
              },
              {
                title: "NRI Brokerage Charges",
                list: [
                  "Non-PIS: 0.5% or ₹50 per order (whichever is lower).",
                  "PIS: 0.5% or ₹200 per order (whichever is lower).",
                  "₹500 + GST as annual AMC.",
                ],
              },
              {
                title: "Account with Debit Balance",
                text: [
                  "Accounts with negative balance are charged ₹40 per executed order instead of ₹20.",
                ],
              },
              {
                title: "Investor’s Protection Fund Trust (IPFT) - NSE",
                list: [
                  "Equity & Futures: ₹10 per crore + GST.",
                  "Options: ₹50 per crore + GST on premium value.",
                  "Currency: ₹0.05 per lakh + GST for Futures and ₹2 per lakh + GST for Options.",
                ],
              },
              {
                title: "Payment Gateway Charges",
                text: [
                  "₹9 + GST per payment. UPI transfers remain completely free.",
                ],
              },
              {
                title: "Delayed Payment Charges",
                text: [
                  "Interest at 18% p.a. (0.05% per day) on debit balances.",
                ],
              },
              
              
            ].map((item, idx) => (
              <div className="turnover-card" key={idx}>
                <h1>{item.title}</h1>
                {item.text &&
                  item.text.map((t, i) => (
                    <p className="textOver" key={i}>
                      {t}
                    </p>
                  ))}
                {item.list && (
                  <ul>
                    {item.list.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-6 col-12 turnover-col">
            {[
              {
                title: "SEBI Charges",
                text: [
                  "₹10 per crore + GST levied by SEBI for market regulation.",
                ],
              },
              {
                title: "DP (Depository Participant) Charges",
                text: [
                  "₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 BullEdge fee + ₹2.34 GST).",
                  "Female first-holders get ₹0.25 off per transaction on CDSL fee.",
                  "Additional ₹0.25 off on CDSL fee for mutual fund and bond debits.",
                ],
              },
              {
                title: "Pledging Charges",
                text: [
                  "₹30 + GST per pledge request per ISIN — includes depository & processing costs.",
                ],
              },
              {
                title: "AMC (Account Maintenance Charges)",
                text: [
                  "BSDA demat: ₹0 if holdings < ₹4 lakh.",
                  "Non-BSDA demat: ₹300/year + 18% GST (billed quarterly).",
                ],
              },
              {
                title: "Corporate Action Order Charges",
                text: [
                  "₹20 + GST for OFS, buyback, takeover, or delisting orders placed through Console.",
                ],
              },
              {
                title: "Off-Market Transfer Charges",
                text: [
                  "₹25 per transaction when transferring securities between demat accounts outside exchanges.",
                ],
              },
              {
                title: "Physical CMR Request",
                text: [
                  "First request free; ₹20 + ₹100 courier + 18% GST thereafter.",
                ],
              },
              {
                title: "Margin Trading Facility (MTF)",
                list: [
                  "Interest: 0.04% per day (₹40 per lakh) on funded amount from T+1 till sale.",
                  "Brokerage: 0.3% or ₹20 per order (whichever is lower).",
                  "Pledge charge: ₹15 + GST per request per ISIN.",
                ],
              },
              {
                title: "Trading via 3-in-1 Account with Block Functionality",
                list: [
                  "Delivery & MTF Brokerage: 0.5% per executed order.",
                  "Intraday Brokerage: 0.05% per executed order (same-day trades).",
                ],
              },
              {
                title: "GST",
                text: [
                  "18% GST is levied on brokerage, SEBI charges, and transaction charges.",
                ],
              },
            ].map((item, idx) => (
              <div className="turnover-card" key={idx}>
                <h1>{item.title}</h1>
                {item.text &&
                  item.text.map((t, i) => (
                    <p className="textOver" key={i}>
                      {t}
                    </p>
                  ))}
                {item.list && (
                  <ul>
                    {item.list.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="row">
          <div className="col-12">
            <div className="turnover-disclaimer">
              <h1 className="fs-4 text-center mb-3 text-muted">Disclaimer</h1>
              <p>
                For delivery-based trades, a minimum of ₹0.01 is charged per
                contract note. Clients opting for physical notes pay ₹20 +
                courier per note. Brokerage won’t exceed SEBI or exchange limits.
                All statutory charges apply at actuals. Free investments apply
                only to individual clients; firms and HUFs pay 0.1% or ₹20
                (whichever lower). Brokerage of 0.25% applies to physically
                settled contracts. Netted-off positions in physically settled
                contracts incur 0.1% brokerage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Turnover;
