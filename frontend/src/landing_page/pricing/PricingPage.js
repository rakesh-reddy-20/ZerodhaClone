import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import Equity from "./Equity";
import Charges from "./Charges";

export default function PricingPage() {
  return (
    <>
      <Hero />
      <Brokerage />
      <Equity />
      <Charges />
    </>
  );
}
