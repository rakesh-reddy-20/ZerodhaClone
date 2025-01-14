import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom fixed-top">
      <div className="container">
        <Link
          className="navbar-brand navbar-brand-custom"
          style={{ width: "10%" }}
          to={"/"}
        >
          <img
            src="media/images/logo.svg"
            className=""
            alt="Company Logo"
            style={{ maxHeight: "40px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ marginRight: "15%" }}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to={"/signup"}>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/product"}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/pricing"}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/support"}>
                Support
              </Link>
            </li>
            {/* Hide this dropdown on small screens */}
            <li className="nav-item dropdown d-none d-lg-block">
              <a
                className="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#343a40" }}
              >
                <i className="bi bi-list"></i>
              </a>
              {/* Added custom style to shift dropdown menu to the left */}
              <ul
                className="dropdown-menu"
                style={{ left: "-200px", top: "56px" }} // Adjust this value as needed
              >
                <li className="dropDownLink">
                  <a className="dropdown-item" href="#">
                    <img
                      src="media/images/kite-logo.svg"
                      style={{ width: "2rem" }}
                    />
                    &nbsp; Kite
                    <span
                      className="dropDownspan"
                      style={{ marginLeft: "6.7rem" }}
                    >
                      Trading platform
                    </span>
                  </a>
                </li>
                <li style={{ verticalAlign: "middle" }}>
                  <a className="dropdown-item" href="#">
                    <img
                      src="media/images/kite-connect.svg"
                      style={{ width: "2rem" }}
                    />
                    &nbsp; Kite Connect
                    <span className="dropDownspan">Trading APIs</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img
                      src="media/images/coin.svg"
                      style={{ width: "2rem" }}
                    />
                    &nbsp; Coin
                    <span
                      className="dropDownspan"
                      style={{ marginLeft: "6.5rem" }}
                    >
                      Mutual funds
                    </span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Separated link
                    <span className="" style={{ marginLeft: "6.5rem" }}>
                      <i class="bi bi-link-45deg"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
