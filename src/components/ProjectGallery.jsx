import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  X,
} from "lucide-react";


import House1 from "../assets/House1.jpeg";
import House2 from "../assets/House2.jpeg";
import House3 from "../assets/House3.jpeg";
import House4 from "../assets/House4.jpeg";
import House5 from "../assets/House5.jpeg";
import House6 from "../assets/House6.jpeg";
import interior1 from "../assets/interior1.jpeg";
import interior2 from "../assets/interior2.jpeg";
import interior3 from "../assets/interior3.jpeg";
import interior4 from "../assets/interior4.jpeg";
import interior5 from "../assets/interior5.jpeg";
import interior6 from "../assets/interior6.jpeg";
import interior7 from "../assets/interior7.jpeg";
import interior8 from "../assets/interior8.jpeg";
import interior9 from "../assets/interior9.jpeg";
import interior10 from "../assets/interior10.jpeg";
import interior11 from "../assets/interior11.jpeg";
import interior12 from "../assets/interior12.jpeg";
import interior13 from "../assets/interior13.jpeg";
import interior14 from "../assets/interior14.jpeg";

import gate1 from "../assets/gate1.jpeg";
import gate2 from "../assets/gate2.jpeg";
import gate3 from "../assets/gate3.jpeg";
import terrace from "../assets/terrace.jpeg";
import terrace1 from "../assets/terrace1.jpeg";
import underconstructionhome from "../assets/Under_construction_home.jpeg";
import underconstruction from "../assets/Under_construction.jpeg";




const projects = [
  {
    id: 1,
    title: "Luxury Residential Villa",
    category: "Residential",
    location: "Coimbatore",
    image: House1,
    size: "large",
  },
  {
    id: 2,
    title: "Modern Commercial Building",
    category: "Residential",
    location: "Tiruppur",
    image: House2,
    size: "normal",
  },
  {
    id: 3,
    title: "Premium Interior Design",
    category: "Residential",
    location: "Coimbatore",
    image: House3,
    size: "normal",
  },
  {
    id: 4,
    title: "Complete Home Renovation",
    category: "Residential",
    location: "Erode",
    image: House4,
    size: "wide",
  },
  {
    id: 5,
    title: "Contemporary Family Home",
    category: "Residential",
    location: "Pollachi",
    image: House5,
    size: "normal",
  },
  {
    id: 6,
    title: "Office Interior Project",
    category: "Residential",
    location: "Coimbatore",
    image: House6,
    size: "normal",
  },
    {
    id: 7,
    title: "Home Interior Project",
    category: "Interior",
    location: "Coimbatore",
    image: interior1,
    size: "normal",
  },
    {
    id: 8,
    title: "Home Interior Project",
    category: "Interior",
    location: "Coimbatore",
    image: interior2,
    size: "normal",
  },
    {
    id: 9,
    title: "Home Interior Project",
    category: "Interior",
    location: "Coimbatore",
    image: interior3,
    size: "normal",
  },
    {
    id: 10,
    title: "Home Interior Project",
    category: "Interior",
    location: "Coimbatore",
    image: interior4,
    size: "normal",
  },
    {
    id: 11,
    title: "Home Interior Project",
    category: "Interior",
    location: "Coimbatore",
    image: interior5,
    size: "normal",
  },
    {
    id: 12,
    title: "Home Interior Project",
    category: "Interior",
    location: "Coimbatore",
    image: interior6,
    size: "normal",
  },
    {
    id: 13,
    title: "Home Interior Project",
    category: "Interior",
    location: "Coimbatore",
    image: interior7,
    size: "normal",
  },
    {
    id: 14,
    title: "Home Interior Project",
    category: "Interior",
    location: "Coimbatore",
    image: interior8,
    size: "normal",
  },
      {
    id: 14,
    title: "Home Interior Project",
    category: "Interior",
    location: "Coimbatore",
    image: interior9,
    size: "normal",
  },

    {
    id: 15,
    title: "Home Interior Project",
    category: "Interior",
    location: "Coimbatore",
    image: interior10,
    size: "normal",
  },
      {
    id: 16,
    title: "Home Interior Project",
    category: "Interior",
    location: "Coimbatore",
    image: interior11,
    size: "normal",
  },
      {
    id: 17,
    title: "Home Interior Project",
    category: "Interior",
    location: "Coimbatore",
    image: interior12,
    size: "normal",
  },
        {
    id: 18,
    title: "Home Interior Project",
    category: "Interior",
    location: "Coimbatore",
    image: interior13,
    size: "normal",
  },
        {
    id: 19,
    title: "Home Interior Project",
    category: "Interior",
    location: "Coimbatore",
    image: interior14,
    size: "normal",
  },
         {
      id: 20,
    title: "Home Interior Project",
    category: "Interior",
    location: "Coimbatore",
    image: gate1,
    size: "normal",
    },   

  {
    id: 21,
    title: "Home Interior Project",
    category: "Interior",
    location: "Coimbatore",
    image: gate2,
    size: "normal",
  },
  {
    id: 22,
    title: "Home Interior Project",
    category: "Interior",
    location: "Coimbatore",
    image: gate3,
    size: "normal",
  },
  {
    id: 23,
    title: "Terrace",
    category: "Residential",
    location: "Coimbatore",
    image: terrace,
    size: "normal",
  },
    {
    id: 24,
    title: "Terrace",
    category: "Residential",
    location: "Coimbatore",
    image: terrace1,
    size: "normal",
  },
      {
    id: 24,
    title: "Construction",
    category: "Residential",
    location: "Coimbatore",
    image: underconstructionhome,
    size: "normal",
  },
      {
    id: 24,
    title: "Construction",
    category: "Residential",
    location: "Coimbatore",
    image: underconstruction,
    size: "normal",
  },

];

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Renovation",
];

function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const selectedIndex = selectedProject
    ? filteredProjects.findIndex(
        (project) => project.id === selectedProject.id
      )
    : -1;

  const showPrevious = () => {
    const previousIndex =
      selectedIndex <= 0
        ? filteredProjects.length - 1
        : selectedIndex - 1;

    setSelectedProject(filteredProjects[previousIndex]);
  };

  const showNext = () => {
    const nextIndex =
      selectedIndex >= filteredProjects.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedProject(filteredProjects[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedProject) return;

      if (event.key === "Escape") {
        setSelectedProject(null);
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = selectedProject
      ? "hidden"
      : "";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject, selectedIndex]);

  return (
    <section className="project-gallery" id="projects">
      <div className="gallery-decoration gallery-decoration-one" />
      <div className="gallery-decoration gallery-decoration-two" />

      <div className="gallery-container">
        <header className="gallery-heading">
          <div className="gallery-heading-icon">
            <Building2 />
          </div>

          <span className="gallery-small-title">
            THIRUMALA CONSTRUCTION
          </span>

          <h2>
            Our Completed
            <span> Projects</span>
          </h2>

          <div className="gallery-title-line">
            <span />
            <i />
            <span />
          </div>

          <p>
            தரமான கட்டுமானம் மற்றும் சிறந்த வடிவமைப்புடன் நாங்கள்
            நிறைவு செய்த சில முக்கியமான projects.
          </p>
        </header>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                activeCategory === category ? "active" : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article
              className={`project-card ${project.size}`}
              key={`${activeCategory}-${project.id}`}
              style={{ "--gallery-delay": `${index * 0.08}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />

              <div className="project-image-shade" />

              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="project-category">
                {project.category}
              </div>

              <div className="project-information">
                <span>{project.location}</span>

                <h3>{project.title}</h3>

                <button
                  type="button"
                  aria-label={`View ${project.title}`}
                >
                  View Project
                  <ArrowUpRight />
                </button>
              </div>

              <div className="project-corner">
                <ArrowUpRight />
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
          onClick={() => setSelectedProject(null)}
        >
          <button
            type="button"
            className="modal-close"
            onClick={() => setSelectedProject(null)}
            aria-label="Close image"
          >
            <X />
          </button>

          <button
            type="button"
            className="modal-navigation modal-previous"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous project"
          >
            <ArrowLeft />
          </button>

          <div
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
            />

            <div className="modal-project-details">
              <span>
                {selectedProject.category} •{" "}
                {selectedProject.location}
              </span>

              <h3>{selectedProject.title}</h3>
            </div>
          </div>

          <button
            type="button"
            className="modal-navigation modal-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next project"
          >
            <ArrowRight />
          </button>
        </div>
      )}
    </section>
  );
}

export default ProjectGallery;