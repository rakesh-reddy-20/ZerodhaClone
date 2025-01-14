import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container p-5 mt-5">
        <div className="row text-center">
          <h1
            className="mt-5 mb-4"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Charges
          </h1>
          {/* Reduced font size and added margin-bottom */}
          <p
            className="fs-5 text-muted mb-4"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            List of all charges and taxes
          </p>
          <p className="fs-6 text-muted mb-5 links"></p>
        </div>
      </div>
    </>
  );
}
