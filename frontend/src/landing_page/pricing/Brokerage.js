import React from "react";
import { Link } from "react-router-dom";

export default function Brokerage() {
  return (
    <>
      <div className="container mb-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Card 1 */}
          <div className="col">
            <div className="card border-0">
              <img
                src="media/images/pricing-eq.svg"
                className="card-img-top img-fluid animated zoom-in"
                alt="Tijori"
              />
              <div className="card-body">
                <h3 className="mb-4">Free equity delivery</h3>
                <p
                  className="card-text text-muted mt-4"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  All equity delivery investments (NSE, BSE), are absolutely
                  free — ₹ 0 brokerage.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col">
            <div className="card border-0">
              <img
                src="media/images/other-trades.svg"
                className="card-img-top img-fluid animated zoom-in"
                alt="Tijori"
              />
              <div className="card-body">
                <h3 className="mb-4">Intraday and Options</h3>
                <p
                  className="card-text text-muted mt-4"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                  intraday trades across equity, currency, and commodity trades.
                  Flat ₹20 on all option trades.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col">
            <div className="card border-0">
              <img
                src="media/images/pricing-eq.svg"
                className="card-img-top img-fluid animated zoom-in"
                alt="Tijori"
              />
              <div className="card-body">
                <h3 className="mb-4">Direct Mutual Funds</h3>
                <p
                  className="card-text text-muted mt-4"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  All direct mutual fund investments are absolutely free — ₹ 0
                  commissions & DP charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
