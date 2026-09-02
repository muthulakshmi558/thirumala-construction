import React from "react";

const ProjectsBanner = () => {
  return (
    <section className="projects-hero">
      <div className="projects-hero-overlay"></div>

      <div className="projects-hero-content">
        <h1>Projects</h1>

        <div className="projects-breadcrumb">
          <span>HOME</span>
          <span>/</span>
          <span>Projects</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBanner;