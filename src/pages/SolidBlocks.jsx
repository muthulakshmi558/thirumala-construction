import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import SolidBlocksHero from "../components/SolidblocksHero";
import SolidblockSecondfold from "../components/SolidblocksSecondfold";
import CallNowBox from "../components/CallNowBox";
import Footer from "../components/Footer";

function SolidBlocksPage() {
  return (
    <>
      <TopBar />
      <Header />
      <SolidBlocksHero/>
      <SolidblockSecondfold />
      <CallNowBox />
      <Footer />
    </>
  );
}

export default SolidBlocksPage;