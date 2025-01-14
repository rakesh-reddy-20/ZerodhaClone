import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="container p-5 mb-5 mt-5 border-bottom">
        <div className="row text-center">
          <h1
            className="fs-1 mt-5 mb-4"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Zerodha Products
          </h1>{" "}
          {/* Reduced font size and added margin-bottom */}
          <p
            className="fs-5 text-muted mb-4"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Sleek, modern, and intuitive trading platforms
          </p>
          <p
            className="fs-6 text-muted mb-4 links"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Check out our <Link to={""}>investment offerings →</Link>
          </p>
        </div>
      </div>
    </>
  );
}
