import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import ProjectsBanner from "../components/ProjectBanner"
import CallNowBox from "../components/CallNowBox";
import ProjectGallery from "../components/ProjectGallery";
import Footer from "../components/Footer";

function ProjectsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <ProjectsBanner/>
      <ProjectGallery/>

      <CallNowBox />
      <Footer />
    </>
  );
}

export default ProjectsPage;