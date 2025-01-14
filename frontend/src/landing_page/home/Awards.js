import React from "react";

export default function Awards() {
  return (
    <>
      <div className="container mb-5">
        <div className="row align-items-center">
          {/* Left Section: Image */}
          <div className="col-lg-6 col-md-12 p-5">
            <img
              src="media/images/largestBroker.svg"
              className="img-fluid animated zoom-in"
              alt="Illustration of Largest Stock Broker in India"
            />
          </div>

          {/* Right Section: Content */}
          <div className="col-lg-6 col-md-12 p-5">
            <h2 className="mb-4">Largest Stock Broker in India</h2>
            <p className="mb-4">
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>
            {/* Features List */}
            <div className="row">
              {/* Left List */}
              <div className="col-6">
                <ul className="list-unstyled">
                  <li>Future and Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
                </ul>
              </div>
              {/* Right List */}
              <div className="col-6">
                <ul className="list-unstyled">
                  <li>Stocks & IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds and Govt. Securities</li>
                </ul>
              </div>
            </div>
            {/* Press Logos */}
            <div className="mt-4">
              <img
                src="media/images/pressLogos.png"
                className="img-fluid custom-press-logos"
                alt="Press Logos"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
