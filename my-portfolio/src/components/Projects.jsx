// src/components/Projects.jsx
import React from 'react';
import './Projects.css'; 

const projects = [
  {
    title: "Lenses",
    description: "Lenses provides a platform where users can upload high quality photos and also get professional help from professional photographers.",
    image: "./assets/lense.png",
    link: "https://chrishawnjoseph.wixsite.com/cjgraphics/lenses"
  },
  {
    title: "HobbyUp ",
    description: "The redevelopment of the Florida Historical Society website. The Florida Historical Society is dedicated to preserving and educating the public about Florida's past.",
    image: "./assets/hobbyup.jpg",
    link: "https://chrishawnjoseph.wixsite.com/cjgraphics/fhs"
  },
  {
    title: "Photoshop",
    description: "Showcasing my work utilizing Photoshop.",
    image: "./assets/Portrait_gloweffect.jpg",
    link: "https://chrishawnjoseph.wixsite.com/cjgraphics/portfolio"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
