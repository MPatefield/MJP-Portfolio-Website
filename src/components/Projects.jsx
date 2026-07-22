import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {

    const projectList = [{img: "https://placehold.co/400x300/606565/f4f1ea?text=Project+1", 
        title: "Project1", 
        description: "HTML Project", 
        githubLink: "linkhere", 
        netlifyLink: "linkhere"},
        {img: "https://placehold.co/400x300/606565/f4f1ea?text=Project+2", 
        title: "Project2", 
        description: "CSS Project", 
        githubLink: "linkhere", 
        netlifyLink: "linkhere"},
        {img: "https://placehold.co/400x300/606565/f4f1ea?text=Project+3", 
        title: "Project3", 
        description: "JS Project", 
        githubLink: "linkhere", 
        netlifyLink: "linkhere"},
        {img: "https://placehold.co/400x300/606565/f4f1ea?text=Project+4", 
        title: "Project4", 
        description: "React Project", 
        githubLink: "linkhere", 
        netlifyLink: "linkhere"},
    ]
    

    return(
        <div id="projects" className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto py-16 px-4 gap-8">
            {projectList.map((project, index) => (
                <ProjectCard key={index} img={project.img} title={project.title} description={project.description} githubLink={project.githubLink} netlifyLink={project.netlifyLink} />
            ))}
        </div>
    )
}

export default Projects