import React from "react";
import Card from "./Card";

export default function Universe() {
  return (
    <>
      <div className="container mt-5">
        <div className="row text-center">
          {/* Reduced font size and added margin-bottom */}
          <p
            className="fs-5 text-muted mb-4 "
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Want to know more about our technology stack? Check out the&nbsp;
            <a href="" className="custom-link">
              Zerodha.tech
            </a>
            blog.
          </p>
        </div>
      </div>
      <div className="container p-5 mb-5">
        <div className="row text-center">
          <h1
            className="fs-2 mt-1 mb-4 fw-semibold text-muted"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            The Zerodha Universe
          </h1>
          {/* Reduced font size and added margin-bottom */}
          <p
            className="fs-5 text-muted mb-4"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <Card
            cardImg={"media/images/zerodhafundhouse.png"}
            cardPara={
              "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
            }
          />
          <Card
            cardImg={"media/images/sensibulllogo.svg"}
            cardPara={
              "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
            }
          />
          <Card
            cardImg={"media/images/tijori.svg"}
            cardPara={
              "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
            }
          />
          <Card
            cardImg={"media/images/streaklogo.png"}
            cardPara={
              "Systematic trading platform that allows you to create and backtest strategies without coding."
            }
          />
          <Card
            cardImg={"media/images/smallcaselogo.png"}
            cardPara={
              "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
            }
          />
          <Card
            cardImg={"media/images/dittologo.png"}
            cardPara={
              "Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free"
            }
          />
        </div>
        <div className="row text-center mt-5">
          <div className="col mx-auto">
            <button className="homeBtn mt-2 btn btn-primary mx-auto">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
