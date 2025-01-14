import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-light border-top pt-5 pb-3">
        <div className="container">
          <div className="row">
            {/* Logo and Description Section */}
            <div
              className="col-12 col-md-3 mb-4 text-center text-md-start"
              style={{ marginLeft: "5%" }}
            >
              <a href="#" className="navbar-brand">
                <img
                  src="media/images/logo.svg"
                  alt="Company Logo"
                  className="img-fluid"
                  style={{ width: "40%" }}
                />
              </a>
              <p className="mt-4 fs-6">
                © 2010 - 2024, Zerodha Broking Ltd.
                <br /> All rights reserved.
              </p>
              <p className="mt-4 fs-6 d-flex justify-content-center justify-content-md-start flex-wrap">
                <span className="me-3 mb-2 footerLink">
                  <i class="bi bi-twitter-x"></i>
                </span>
                <span className="me-3 mb-2 footerLink">
                  <i class="bi bi-facebook"></i>
                </span>
                <span className="me-3 mb-2 footerLink">
                  <i class="bi bi-whatsapp"></i>
                </span>
                <span className="me-3 mb-2 footerLink">
                  <i class="bi bi-linkedin"></i>
                </span>
                <span className="me-3 mb-2 footerLink">
                  <i class="bi bi-youtube"></i>
                </span>
                <span className="me-3 mb-2 footerLink">
                  <i class="bi bi-telegram"></i>
                </span>
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="col-12 col-md-2 mb-4">
              <h5>Company</h5>
              <ul className="list-unstyled ulLink">
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    Products
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    Pricing
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    Referral Programme
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    Careers
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    Zerodha.tech
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    Press & media
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    Zerodha Cares (CSR)
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="col-12 col-md-3 mb-4">
              <h5>Support</h5>
              <ul className="list-unstyled ulLink">
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    Contact us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    Support portal
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    Z-Connect blog
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    List of charges
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    Downloads & resources
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    Videos
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    Market overview
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    How to file a complaint?
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    Status of your complaints
                  </a>
                </li>
              </ul>
            </div>

            {/* Account Section */}
            <div className="col-12 col-md-3 mb-4">
              <h5>Account</h5>
              <ul className="list-unstyled ulLink">
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    Open an account
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black footerLink">
                    Fund transfer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="row">
            {/* Reduces space below the first row */}
            <div
              className="col text-left px-4 py-3"
              style={{
                margin: "20px 0", // Top and Bottom margin
                padding: "15px 20px", // Padding for inner content
                backgroundColor: "#f9f9f9", // Optional background for better visibility
              }}
            >
              <p className="text-muted footerpara mb-3">
                Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
                Registration no.: INZ000031633 CDSL/NSDL: Depository services
                through Zerodha Broking Ltd. – SEBI Registration no.:
                IN-DP-431-2019 Commodity Trading through Zerodha Commodities
                Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.:
                INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154,
                4th Cross, Dollars Colony, Opp. Clarence Public School, J.P
                Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
                complaints pertaining to securities broking please write
                to&nbsp;
                <a href="#" className="text-decoration-none pLink">
                  complaints@zerodha.com
                </a>
                , for DP related to&nbsp;
                <a href="#" className="text-decoration-none pLink">
                  dp@zerodha.com
                </a>
                . Please ensure you carefully read the Risk Disclosure Document
                as prescribed by SEBI | ICF
              </p>
              <p className="text-muted footerpara mb-3">
                Procedure to file a complaint on&nbsp;
                <a href="#" className="text-decoration-none pLink">
                  SEBI SCORES
                </a>
                : Register on SCORES portal. Mandatory details for filing
                complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail
                ID. Benefits: Effective Communication, Speedy redressal of the
                grievances
              </p>
              <p
                className="fs-7 mb-3"
                style={{ fontSize: "0.7rem", fontFamily: "Roboto" }}
              >
                <a href="#" className="text-decoration-none pLink">
                  Smart Online Dispute Resolution&nbsp;
                </a>
                |
                <a href="#" className="text-decoration-none pLink">
                  &nbsp;Grievances Redressal Mechanism
                </a>
              </p>
              <p className="text-muted footerpara mb-3">
                Investments in securities market are subject to market risks;
                read all the related documents carefully before investing.
              </p>
              <p className="fs-7 text-muted footerpara mb-3">
                Attention investors:
                <br /> 1) Stock brokers can accept securities as margins from
                clients only by way of pledge in the depository system w.e.f
                September 01, 2020.
                <br /> 2) Update your e-mail and phone number with your stock
                broker / depository participant and receive OTP directly from
                depository on your e-mail and/or mobile number to create pledge.
                <br />
                3) Check your securities / MF / bonds in the consolidated
                account statement issued by NSDL/CDSL every month.
              </p>
              <p className="text-muted footerpara mb-0">
                {/* Remove margin-bottom */}
                "Prevent unauthorised transactions in your account. Update your
                mobile numbers/email IDs with your stock brokers. Receive
                information of your transactions directly from Exchange on your
                mobile/email at the end of the day. Issued in the interest of
                investors. KYC is one time exercise while dealing in securities
                markets - once KYC is done through a SEBI registered
                intermediary (broker, DP, Mutual Fund etc.), you need not
                undergo the same process again when you approach another
                intermediary." Dear Investor, if you are subscribing to an IPO,
                there is no need to issue a cheque. Please write the Bank
                account number and sign the IPO application form to authorize
                your bank to make payment in case of allotment. In case of non
                allotment the funds will remain in your bank account. As a
                business we don't give stock tips, and have not authorized
                anyone to trade on behalf of others. If you find anyone claiming
                to be part of Zerodha and offering such services, please{" "}
                <a href="#" className="text-decoration-none pLink">
                  create a ticket here
                </a>
                .
              </p>
            </div>
          </div>

          <div className="row mt-0">
            <div
              className="col text-center"
              style={{
                opacity: "0.7",
                fontFamily: "Roboto",
                fontSize: "0.9rem",
              }}
            >
              <a
                href="#"
                className="mx-2 text-decoration-none text-muted footerLink"
              >
                NSE
              </a>
              <a
                href="#"
                className="mx-2 text-decoration-none text-muted footerLink"
              >
                BSE
              </a>
              <a
                href="#"
                className="mx-2 text-decoration-none text-muted footerLink"
              >
                MCX
              </a>
              <a
                href="#"
                className="mx-2 text-decoration-none text-muted footerLink"
              >
                Terms & conditions
              </a>
              <a
                href="#"
                className="mx-2 text-decoration-none text-muted footerLink"
              >
                Policies & procedures
              </a>
              <a
                href="#"
                className="mx-2 text-decoration-none text-muted footerLink"
              >
                Privacy policy
              </a>
              <a
                href="#"
                className="mx-2 text-decoration-none text-muted footerLink"
              >
                Disclosure
              </a>
              <a
                href="#"
                className="mx-2 text-decoration-none text-muted footerLink"
              >
                For investor's attention
              </a>
              <a
                href="#"
                className="mx-2 text-decoration-none text-muted footerLink"
              >
                Investor charter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
