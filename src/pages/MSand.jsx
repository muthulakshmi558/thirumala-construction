import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import MSandHero from "../components/MSandHero";
import MSandSecondfold from "../components/MSandSecondfold";
import CallNowBox from "../components/CallNowBox";
import Footer from "../components/Footer";

function MSandPage() {
  return (
    <>
      <TopBar />
      <Header />
      <MSandHero/>
      <MSandSecondfold />
      <CallNowBox />
      <Footer />
    </>
  );
}

export default MSandPage;