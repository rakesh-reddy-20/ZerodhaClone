import React from "react";

export default function Charges() {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col">
            <h3
              style={{ fontFamily: "Roboto, sans-serif" }}
              className="mb-4 fw-semibold"
            >
              Charges explained
            </h3>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 col-md-6">
            <h4 className="heading">Securities/Commodities transaction tax</h4>
            <p className="paragraph">
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
            <p className="paragraph">
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
            <h4 className="heading">Transaction/Turnover Charges</h4>
            <p className="paragraph">
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p className="paragraph">
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </p>
            <p className="paragraph">
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </p>
            <p className="paragraph">
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </p>
            <p className="paragraph">
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </p>
            <h4 className="heading">Call & trade</h4>
            <p className="paragraph">
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>
            <h4 className="heading">Stamp charges</h4>
            <p className="paragraph">
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>
            <h4 className="heading">NRI brokerage charges</h4>
            <p className="paragraph">
              <ul>
                <li>₹100 per order for futures and options.</li>
                <li>
                  For a non-PIS account, 0.5% or ₹100 per executed order for
                  equity (whichever is lower).
                </li>
                <li>
                  For a PIS account, 0.5% or ₹200 per executed order for equity
                  (whichever is lower).
                </li>
                <li>
                  ₹500 + GST as yearly account maintenance charges (AMC)
                  charges.
                </li>
              </ul>
            </p>
            <h4 className="heading">Account with debit balance</h4>
            <p className="paragraph">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
            <h4 className="heading">
              Charges for Investor's Protection Fund Trust (IPFT) by NSE
            </h4>
            <p className="paragraph">
              <ul>
                <li>
                  Equity and Futures - ₹10 per crore + GST of the traded value.
                </li>
                <li>
                  Options - ₹50 per crore + GST traded value (premium value).
                </li>
                <li>
                  Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                  per lakh + GST of premium for Options.
                </li>
              </ul>
            </p>
            <h4 className="heading">Margin Trading Facility (MTF)</h4>
            <p className="paragraph">
              <ul>
                <li>
                  MTF Interest: 0.04% per day (₹40 per lakh) on the funded
                  amount. The interest is applied from T+1 day until the day MTF
                  stocks are sold.
                </li>
                <li>
                  MTF Brokerage: 0.03% or Rs. 20/executed order, whichever is
                  lower.
                </li>
                <li>
                  MTF pledge charge: ₹30 + GST per pledge request per ISIN.
                </li>
              </ul>
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h4 className="heading">GST</h4>
            <p className="paragraph">
              Tax levied by the government on the services rendered. 18% of
              (brokerage + SEBI charges + transaction charges)
            </p>
            <h4 className="heading">SEBI Charges</h4>
            <p className="paragraph">
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
            <h4 className="heading">DP (Depository participant) charges</h4>
            <p className="paragraph">
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
            </p>
            <p className="paragraph">
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </p>
            <h4 className="heading">Pledging charges</h4>
            <p className="paragraph">₹30 + GST per pledge request per ISIN.</p>
            <h4 className="heading">AMC (Account maintenance charges)</h4>
            <p className="paragraph">
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA,{" "}
              <a href="" className="custom-link">
                Click here
              </a>
            </p>
            <p className="paragraph">
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn more about AMC,{" "}
              <a href="" className="custom-link ">
                Click here
              </a>
            </p>
            <h4 className="heading">Corporate action order charges</h4>
            <p className="paragraph">
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through Console.
            </p>
            <h4 className="heading">Off-market transfer charges</h4>
            <p className="paragraph">₹25 per transaction.</p>
            <h4 className="heading">Physical CMR request</h4>
            <p className="paragraph">
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>
            <h4 className="heading">Payment gateway charges</h4>
            <p className="paragraph">
              ₹9 + GST (Not levied on transfers done via UPI)
            </p>
            <h4 className="heading">Delayed Payment Charges</h4>
            <p className="paragraph">
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading account.{" "}
              <a href="" className="custom-link">
                Learn more.
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4 className="heading mt-4">Disclaimer</h4>
            <p className="paragraph">
              For Delivery based trades, a minimum of ₹0.01 will be charged per
              contract note. Clients who opt to receive physical contract notes
              will be charged ₹20 per contract note plus courier charges.
              Brokerage will not exceed the rates specified by SEBI and the
              exchanges. All statutory and regulatory charges will be levied at
              actuals. Brokerage is also charged on expired, exercised, and
              assigned options contracts. Free investments are available only
              for our retail individual clients. Companies, Partnerships,
              Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as
              delivery brokerage. A brokerage of 0.25% of the contract value
              will be charged for contracts where physical delivery happens. For
              netted off positions in physically settled contracts, a brokerage
              of 0.1% will be charged.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2
              className="mb-3 mt-5"
              style={{ opacity: "0.8", fontFamily: "Roboto, sans-serif" }}
            >
              Charges for account opening
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table
              className="table table-striped"
              style={{
                fontFamily: "Roboto, sans-serif",
              }}
              border={1}
            >
              <thead className="thead-light">
                <tr>
                  <td scope="col" style={{ verticalAlign: "middle" }}>
                    Type of account
                  </td>
                  <td scope="col" style={{ verticalAlign: "middle" }}>
                    Charges
                  </td>
                </tr>
              </thead>
              <tbody style={{ opacity: "0.6" }}>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>Online account</td>
                  <td style={{ verticalAlign: "middle" }}>
                    <div className="free-tag">FREE</div>
                  </td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>Offline accountT</td>
                  <td style={{ verticalAlign: "middle" }}>
                    <div className="free-tag">FREE</div>
                  </td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    NRI account (offline only)
                  </td>
                  <td style={{ verticalAlign: "middle" }}>₹ 500</td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    Partnership, LLP, HUF, or Corporate accounts (offline only)
                  </td>
                  <td style={{ verticalAlign: "middle" }}>₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2
              className="mb-3 mt-5 mb-4"
              style={{ opacity: "0.8", fontFamily: "Roboto, sans-serif" }}
            >
              Charges for optional value added services
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table
              className="table table-striped"
              style={{
                fontFamily: "Roboto, sans-serif",
              }}
              border={1}
            >
              <thead className="thead-light">
                <tr>
                  <td scope="col" style={{ verticalAlign: "middle" }}>
                    Service
                  </td>
                  <td scope="col" style={{ verticalAlign: "middle" }}>
                    Billing Frquency
                  </td>
                  <td scope="col" style={{ verticalAlign: "middle" }}>
                    Charges
                  </td>
                </tr>
              </thead>
              <tbody style={{ opacity: "0.6" }}>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>Tickertape</td>
                  <td style={{ verticalAlign: "middle" }}> Monthly / Annual</td>
                  <td style={{ verticalAlign: "middle" }}>
                    Free: 0 | Pro: 249/2399
                  </td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>Smallcase</td>
                  <td style={{ verticalAlign: "middle" }}>Per transaction</td>
                  <td style={{ verticalAlign: "middle" }}>
                    Buy & Invest More: 100 | SIP: 10
                  </td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>Kite Connect</td>
                  <td style={{ verticalAlign: "middle" }}>Monthly</td>
                  <td style={{ verticalAlign: "middle" }}>
                    Connect: 2000 | Historical: 2000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
