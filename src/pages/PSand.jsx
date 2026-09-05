import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import PSandHero from "../components/PSandHero";
import PSandSecondfold from "../components/PSandSecondfold";
import CallNowBox from "../components/CallNowBox";
import Footer from "../components/Footer";

function PSandPage() {
  return (
    <>
      <TopBar />
      <Header />
      <PSandHero/>
      <PSandSecondfold />
      <CallNowBox />
      <Footer />
    </>
  );
}

export default PSandPage;