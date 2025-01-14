import React from "react";

export default function Pricing() {
  return (
    <>
      <div className="container mt-5 p-5">
        <div className="row">
          <div className="col-md-4 col-12">
            <h2 className="fs-2 mb-4">Unbeatable pricing</h2>
            <p className="text-muted">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="" className="fw-semibold text-decoration-none">
              Pricing
              <span>
                <small>
                  <i class="bi bi-arrow-right"></i>
                </small>
              </span>
            </a>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 col-12">
            <div className="row g-0">
              <div className="col-2 d-flex align-items-center">
                <img
                  src="media/images/pricing-eq.svg"
                  alt="Free account opening"
                  className="me-2"
                />
              </div>
              <div className="col-2 d-flex align-items-center">
                <span className="pricingSpan">Free account opening</span>
              </div>
              <div className="col-2 d-flex align-items-center">
                <img
                  src="media/images/pricing-eq1.svg"
                  alt="Free equity delivery"
                  className="me-2"
                />
              </div>
              <div className="col-2 d-flex align-items-center">
                <span className="pricingSpan">
                  Free equity delivery and direct mutual funds
                </span>
              </div>
              <div className="col-2 d-flex align-items-center">
                <img
                  src="media/images/other-trades.svg"
                  className="me-2"
                  alt="Intraday and F&O"
                />
              </div>
              <div className="col-2 d-flex align-items-center">
                <span className="pricingSpan">Intraday and F&O</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
