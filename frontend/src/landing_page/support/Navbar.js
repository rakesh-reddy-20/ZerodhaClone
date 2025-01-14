import React from "react";

export default function Navbar() {
  return (
    <>
      <div style={{ backgroundColor: "#318CE7", minHeight: "27rem" }}>
        <div className="container mt-5">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12 mt-5">
              <h4 className="mb-5 custom-heading">Support Portal</h4>
              <p className="custom-paragraph">
                Search for an answer or browse help topics to create a ticket
              </p>
              <div className="position-relative mb-3">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
                />
                <i className="fa fa-search search-icon" aria-hidden="true"></i>
              </div>
              {/* Links Section */}
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                <a href="#" className="customLink1 border-bottom">
                  Track account opening
                </a>
                <a href="#" className="customLink1 border-bottom">
                  Track segment activation
                </a>
                <a href="#" className="customLink1 border-bottom">
                  Intraday margins
                </a>
                <a href="#" className="customLink1 border-bottom">
                  Kite user manual
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 col-md-12 mt-5">
              <div className="mt-lg-5 px-2 px-lg-5">
                <h5 className="custom-heading">Featured</h5>
                <ol className="customLink1">
                  <li className="mb-3">
                    <a href="#" className="customLink1">
                      Latest Intraday leverages and Square-off timings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="customLink1">
                      Offer for sale (OFS) - December 2024
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
