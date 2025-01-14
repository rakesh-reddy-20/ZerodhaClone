import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <div className="container p-5 mb-5 mt-5">
        <div className="row text-center">
          <h1 className="fs-3 mb-4">404 ERROR</h1>{" "}
          {/* Reduced font size and added margin-bottom */}
          <p className="fs-3 text-muted mb-4">
            <i class="bi bi-emoji-tear"></i> Page not found
          </p>
          <Link to={"/"}>
            <button className="homeBtn mt-2 btn btn-primary mx-auto">
              Home <i class="fa fa-home" aria-hidden="true"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
