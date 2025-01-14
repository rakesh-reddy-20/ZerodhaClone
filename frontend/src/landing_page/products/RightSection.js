import React from "react";

export default function rightSection({
  imageURL,
  productName,
  productDesc,
  firstLink,
  firstLinkText,
  secondLink,
  secondLinkText,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5 custom-margin-bottom">
      <div className="row align-items-center mt-5">
        <div className="col-md-5 text-md-start text-center px-4 order-md-0 order-1">
          <h5 className="fw-bold mb-3">{productName}</h5>
          <p
            className="text-muted"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            {productDesc}
          </p>

          {/* Links Section */}
          <div className="mt-4 d-flex flex-column flex-md-row justify-content-md-start gap-4">
            {firstLinkText && (
              <a href={firstLink} className="fw-semibold custom-link">
                {firstLinkText}&nbsp;&nbsp;
                <i className="bi bi-arrow-right"></i>
              </a>
            )}
            {secondLinkText && (
              <a
                href={secondLink}
                className="fw-semibold custom-link"
                style={{ marginLeft: "2.6rem" }}
              >
                {secondLinkText}&nbsp;&nbsp;
                <i className="bi bi-arrow-right"></i>
              </a>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-7 text-center mb-4 mb-md-0 order-md-1 order-0">
          <img
            src={imageURL}
            alt={`${productName} preview`}
            className="img-fluid animated zoom-in"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
