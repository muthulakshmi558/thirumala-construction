import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import HeroBricks from "../components/HeroBricks";
import BricksSecondFold from "../components/BricksSecondFold";
import CallNowBox from "../components/CallNowBox";
import Footer from "../components/Footer";

function BricksPage() {
  return (
    <>
      <TopBar />
      <Header />
      <HeroBricks/>
      <BricksSecondFold />
      <CallNowBox />
      <Footer />
    </>
  );
}

export default BricksPage;