import React from "react";

export default function Equity() {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col">
            <h2
              className="mb-3 mt-5"
              style={{ opacity: "0.8", fontFamily: "Roboto, sans-serif" }}
            >
              Equity
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div
              className="table-responsive"
              style={{
                fontFamily: "Roboto, sans-serif",
              }}
            >
              <table className="table table-striped" border={1}>
                <thead className="thead-light">
                  <tr>
                    <td scope="col" style={{ verticalAlign: "middle" }}></td>
                    <td scope="col" style={{ verticalAlign: "middle" }}>
                      Equity Delivery
                    </td>
                    <td scope="col" style={{ verticalAlign: "middle" }}>
                      Equity Intraday
                    </td>
                    <td scope="col" style={{ verticalAlign: "middle" }}>
                      F&O - Futures
                    </td>
                    <td scope="col" style={{ verticalAlign: "middle" }}>
                      F&O - Options
                    </td>
                  </tr>
                </thead>
                <tbody style={{ opacity: "0.6" }}>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>Brokerage</td>
                    <td style={{ verticalAlign: "middle" }}>Zero Brokerage</td>
                    <td style={{ verticalAlign: "middle" }}>
                      0.03% or ₹20/executed order whichever is lower
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      0.03% or ₹20/executed order whichever is lower
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      Flat ₹20 per executed order
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>STT/CTT</td>
                    <td style={{ verticalAlign: "middle" }}>
                      0.1% on buy & sell
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      0.025% on the sell side
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      0.02% on the sell side
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      <ul style={{ padding: 0, margin: 0 }}>
                        <li>
                          0.125% of the intrinsic value on options that are
                          bought and exercised
                        </li>
                        <li>0.1% on sell side (on premium)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      Transaction Charges
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      NSE: 0.00297%
                      <br /> BSE: 0.00375%
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      NSE: 0.00297%
                      <br /> BSE: 0.00375%
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      NSE: 0.00173%
                      <br /> BSE: 0
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      NSE: 0.03503% (on premium)
                      <br /> BSE: 0.0325% (on premium)
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>GST</td>
                    <td style={{ verticalAlign: "middle" }}>
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>SEBI Charges</td>
                    <td style={{ verticalAlign: "middle" }}>₹10 / crore</td>
                    <td style={{ verticalAlign: "middle" }}>₹10 / crore</td>
                    <td style={{ verticalAlign: "middle" }}>₹10 / crore</td>
                    <td style={{ verticalAlign: "middle" }}>₹10 / crore</td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>Stamp Charges</td>
                    <td style={{ verticalAlign: "middle" }}>
                      0.015% or ₹1500 / crore on buy side
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      0.003% or ₹300 / crore on buy side
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      0.002% or ₹200 / crore on buy side
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      0.003% or ₹300 / crore on buy side
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
