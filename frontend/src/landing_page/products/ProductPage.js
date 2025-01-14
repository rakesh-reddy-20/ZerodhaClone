import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Hero from "./Hero";
import Universe from "./Universe";

export default function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL={"media/images/kite.png"}
        productName={"Kite"}
        productDesc={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        firstLink={""}
        firstLinkText={"Try demo"}
        secondLink={""}
        secondLinkText={"Learn more"}
        googlePlay={"media/images/googleplaybadge.svg"}
        appStore={"media/images/appstorebadge.svg"}
      />
      <RightSection
        imageURL={"media/images/console.png"}
        productName={"Console"}
        productDesc={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        firstLink={""}
        firstLinkText={"Learn more"}
        secondLink={""}
        secondLinkText={""}
      />
      <LeftSection
        imageURL={"media/images/coin.png"}
        productName={"Coin"}
        productDesc={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        firstLink={""}
        firstLinkText={"Coin"}
        secondLink={""}
        secondLinkText={""}
        googlePlay={"media/images/googleplaybadge.svg"}
        appStore={"media/images/appstorebadge.svg"}
      />
      <RightSection
        imageURL={"media/images/kiteconnect.png"}
        productName={"Kite Connect API"}
        productDesc={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        firstLink={""}
        firstLinkText={"Kite Connect"}
        secondLink={""}
        secondLinkText={""}
      />
      <LeftSection
        imageURL={"media/images/varsity.png"}
        productName={"Varsity mobile"}
        productDesc={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        firstLink={""}
        firstLinkText={""}
        secondLink={""}
        secondLinkText={""}
        googlePlay={"media/images/googleplaybadge.svg"}
        appStore={"media/images/appstorebadge.svg"}
      />
      <Universe />
    </>
  );
}
