import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import JalliHero from "../components/JalliHero";
import JalliSecondfold from "../components/JalliSecondfold";
import CallNowBox from "../components/CallNowBox";
import Footer from "../components/Footer";

function JalliPage() {
  return (
    <>
      <TopBar />
      <Header />
      <JalliHero/>
      <JalliSecondfold />
      <CallNowBox />
      <Footer />
    </>
  );
}

export default JalliPage;