import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import QuarryStoneHero from "../components/QuarryStoneHero";
import QuarryStonesecondfold from "../components/QuarryStoneSecondfold";
import CallNowBox from "../components/CallNowBox";
import Footer from "../components/Footer";

function QuarryStonePage() {
  return (
    <>
      <TopBar />
      <Header />
      <QuarryStoneHero/>
      <QuarryStonesecondfold />
      <CallNowBox />
      <Footer />
    </>
  );
}

export default QuarryStonePage;