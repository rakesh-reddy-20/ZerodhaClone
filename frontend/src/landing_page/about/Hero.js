import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="container p-5 mb-3"
        style={{
          marginTop: "5%",
        }}
      >
        <div className="row text-center">
          <h1
            className="fs-2 mb-4 text-muted"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: "500",
            }}
          >
            We pioneered the discount broking model in India.
            <br /> Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>

      {/* About Content Section */}
      <div className="container border-top mb-5">
        <div className="row mt-5 justify-content-center">
          {/* Left Column */}
          <div
            className="col-lg-4 col-md-6 mt-4 text-muted"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p>
              Over 1+ Crore clients place millions of orders every day through
              our powerful ecosystem of investment platforms, contributing over
              15% of all Indian retail trading volumes.
            </p>
          </div>

          {/* Right Column */}
          <div
            className="col-lg-4 col-md-6 mt-4 text-muted"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            <p>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p>
              <Link to="/" className="pLinks">
                Rainmatter
              </Link>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>
            <p>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our&nbsp;
              <Link to="/" className="pLinks">
                blog
              </Link>
              &nbsp;or see what the media is&nbsp;
              <Link to="/media" className="pLinks">
                saying about us
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
