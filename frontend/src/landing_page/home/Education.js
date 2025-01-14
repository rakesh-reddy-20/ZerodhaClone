import React from "react";

export default function Education() {
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Section: Image */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 d-flex justify-content-center">
            <img
              src="media/images/education.svg"
              className="img-fluid animated zoom-in"
              alt="Stock Market Education Illustration"
            />
          </div>
          {/* Right Section: Content */}
          <div className="col-lg-6 col-md-12">
            <h2 className="fs-2 mb-4">Free and Open Market Education</h2>
            <p className="text-muted">
              Varsity, the largest online stock market education book in the
              world, covers everything from the basics to advanced trading.
            </p>
            <a
              href="#"
              className="fw-semibold text-decoration-none d-inline-flex align-items-center"
            >
              Varsity
              <i className="bi bi-arrow-right ms-2"></i>
            </a>
            <p className="text-muted mt-4">
              TradingQ&A, the most active trading and investment community in
              India, answers all your market-related queries.
            </p>
            <a
              href="#"
              className="fw-semibold text-decoration-none d-inline-flex align-items-center"
            >
              TradingQ&A
              <i className="bi bi-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
