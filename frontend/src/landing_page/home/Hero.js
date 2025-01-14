import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container p-5 mb-5 mt-5">
        <div className="row text-center">
          <div className="col-8 mx-auto">
            <img
              src="media/images/homeHero.png"
              alt="Home banner"
              className="banner img-fluid mb-5 mt-5 animated zoom-in"
            />
          </div>
          <h1 className="fs-3 mb-4">Invest is everything</h1>
          <p className="fs-5 text-muted mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more.
          </p>
          <button className="homeBtn mt-2 btn btn-primary mx-auto">
            Signup now
          </button>
        </div>
      </div>
    </>
  );
}
