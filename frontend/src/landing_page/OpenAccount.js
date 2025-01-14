import React from "react";

export default function OpenAccount() {
  return (
    <>
      <div className="container p-5 mb-5">
        <div className="row text-center">
          <h1 className="fs-3 mb-4">Open a Zerodha account</h1>{" "}
          {/* Reduced font size and added margin-bottom */}
          <p className="fs-5 text-muted mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button className="homeBtn mt-2 btn btn-primary mx-auto">
            Sign up for free
          </button>
        </div>
      </div>
    </>
  );
}
