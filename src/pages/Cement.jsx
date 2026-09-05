import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import CementHero from "../components/CementHero";
import CementSecondfold from "../components/CementSecondfold";
import CallNowBox from "../components/CallNowBox";
import Footer from "../components/Footer";

function CementPage() {
  return (
    <>
      <TopBar />
      <Header />
      <CementHero/>
      <CementSecondfold />
      <CallNowBox />
      <Footer />
    </>
  );
}

export default CementPage;