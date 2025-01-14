import React from "react";

export default function Card({ cardImg, cardPara }) {
  return (
    <>
      <div className="col">
        <div className="card border-0 mb-3">
          <img
            src={cardImg}
            className="card-img-top img-fluid card-img-custom animated zoom-in"
            alt="Zerodha Fund House"
          />
          <div className="card-body">
            <p
              className="card-text text-muted mt-4"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {cardPara}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
