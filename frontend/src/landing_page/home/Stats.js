import React from "react";

export default function Stats() {
  return (
    <>
      <div className="container mt-5 p-5">
        <div className="row">
          <div className="col-md-5 col-12">
            <h1 className="mb-5 fs-2">Trust with confidence</h1>
            <div className="mb-4">
              <h4 className="fs-4">Customer-first always</h4>
              <p className="text-muted">
                That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
                crores of equity investments and contribute to 15% of daily
                retail exchange volumes in India.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="fs-4">No spam or gimmicks</h4>
              <p className="text-muted">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="fs-4">The Zerodha universe</h4>
              <p className="text-muted">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="fs-4">Do better with money</h4>
              <p className="text-muted">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="fs-4">Customer-first always</h4>
              <p className="text-muted">
                That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
                crores of equity investments and contribute to 15% of daily
                retail exchange volumes in India.
              </p>
            </div>
          </div>

          <div className="col-md-7 col-12 d-flex justify-content-center align-items-center">
            <img
              src="media/images/ecosystem.png"
              className="img-fluid animated zoom-in"
              alt="Zerodha Ecosystem"
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col d-flex justify-content-center">
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
}
