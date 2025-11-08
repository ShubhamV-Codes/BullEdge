import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";



function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media\images\VISTARA.png"
        productName="Vistara"
        productDescription="Vistara offers a peaceful escape surrounded by nature, cozy rooms, homemade meals, and a warm stay that feels like home."
        learnMore="https://vistara-lime.vercel.app"
      />
      <RightSection
        imageURL="media/images/kitex-app.png"
        productName="KiteX"
        productDescription="KiteX is a fast, reliable trading platform that empowers investors with real-time insights, smooth execution, and powerful market tools."
        learnMore="https://bull-edge-kite.vercel.app/"
      />

      <LeftSection
        imageURL="media\images\coins.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        learnMore="/not-available"
      />

      <RightSection
        imageURL="media/images/api.svg"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="/not-available"
      />

      <LeftSection
        imageURL="media/images/console-app.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="/not-available"
      />
      

      <Universe />
    </>
  );
}

export default ProductPage;
