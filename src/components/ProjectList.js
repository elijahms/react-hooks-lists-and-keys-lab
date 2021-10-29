import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        
        {projects.map((object) => {
          return <ProjectItem 
          key={object.id} 
          name={object.name} 
          about={object.about} 
          technologies={object.technologies} 
          />
        })
        }
      
      
      </div>
    </div>
  );
}

export default ProjectList;
