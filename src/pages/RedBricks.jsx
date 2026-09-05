import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import RedBricksHero from "../components/RedBricksHero";
import RedBricksSecondfold from "../components/RedBricksSecondfold";
import CallNowBox from "../components/CallNowBox";
import Footer from "../components/Footer";

function RedBricksPage() {
  return (
    <>
      <TopBar />
      <Header />
      <RedBricksHero/>
      <RedBricksSecondfold />
      <CallNowBox />
      <Footer />
    </>
  );
}

export default RedBricksPage;