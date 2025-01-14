import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <>
      <div class="container mt-5 mb-5 border-top">
        <h1 class="mb-5 mt-5 fs-3 text-muted text-center">People</h1>
        <div class="row d-flex align-items-center">
          {/* <!-- Profile Image --> */}
          <div class="col-md-6 text-center mb-3 mb-md-0 d-flex justify-content-center">
            <img
              src="media/images/owner.jpg"
              alt="Profile"
              class="profile-img"
            />
          </div>
          {/* <!-- Profile Description --> */}
          <div class="col-md-6">
            <h5 class="name-title">R Rakesh Reddy</h5>
            <p class="designation">Designer, Developer</p>
            <p style={{ fontFamily: "Roboto" }}>
              This trading website was developed as a project.
            </p>
            <p style={{ fontFamily: "Roboto" }}>
              "This trading website is a project that I developed, drawing
              inspiration from Zerodha's platform. It showcases my understanding
              of user-friendly design, and functionality. The website serves as
              a demonstration of my skills in web development and my passion for
              creating efficient and intuitive platforms.
            </p>
            <p style={{ fontFamily: "Roboto" }}>Playing football is his zen.</p>
            <div class="links">
              Connect on&nbsp;
              <Link to={""} target="_blank">
                Homepage
              </Link>
              /&nbsp;
              <Link to={""} target="_blank">
                TradingQnA
              </Link>
              /&nbsp;
              <Link to={""} target="_blank">
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
