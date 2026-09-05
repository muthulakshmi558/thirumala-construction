import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import ConstructionsHero from "../components/ConstructionsHero";
import ProjectGallery from "../components/ProjectGallery";

import CallNowBox from "../components/CallNowBox";
import Footer from "../components/Footer";

function ConstructionsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <ConstructionsHero/>
      <ProjectGallery/>
      <CallNowBox />
      <Footer />
    </>
  );
}

export default ConstructionsPage;