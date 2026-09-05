import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import InterlockMudHero from "../components/InterlockMudHero";
import InterlockMudSecondfold from "../components/InterlockMudSecondfold";
import CallNowBox from "../components/CallNowBox";
import Footer from "../components/Footer";

function InterlockMudPage() {
  return (
    <>
      <TopBar />
      <Header />
      <InterlockMudHero/>
      <InterlockMudSecondfold />
      <CallNowBox />
      <Footer />
    </>
  );
}

export default InterlockMudPage;