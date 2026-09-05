import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import AACBlockHero from "../components/AACBlockHero";
import AACBlockSecondfold from "../components/AACBlockSecondfold";
import CallNowBox from "../components/CallNowBox";
import Footer from "../components/Footer";

function AACBlockPage() {
  return (
    <>
      <TopBar />
      <Header />
      <AACBlockHero/>
      <AACBlockSecondfold />
      <CallNowBox />
      <Footer />
    </>
  );
}

export default AACBlockPage;