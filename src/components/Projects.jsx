import React from "react";
import ProjectCard from "./ProjectCard";
import JsProjectImg from '../assets/JSProjectImg.png'
import memoryFlipGameImg from '../assets/memoryFlipGameImg.png'

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
        {img: JsProjectImg, 
        title: "Online Diary Project", 
        description: "This is my main JavaScript project that I completed. Details contained within READ.md. Available to view via GitHub or Netlify using the buttons below.", 
        githubLink: "https://github.com/MPatefield/ITOL-Diary-Project", 
        netlifyLink: "https://euphonious-vacherin-96ee25.netlify.app/"},
        {img: "https://placehold.co/400x300/606565/f4f1ea?text=Project+4", 
        title: "Project4", 
        description: "React Project", 
        githubLink: "linkhere", 
        netlifyLink: "linkhere"},
        {img: memoryFlipGameImg, 
        title: "Memory Flip Card Game", 
        description: "This was a fun little side-project i did for fun whilst learning vanilla JavaScript. Showcases use of (Enter Skills here).", 
        githubLink: "https://github.com/MPatefield/memory-card-flip-VJS", 
        netlifyLink: "https://luminous-gumdrop-51c8f5.netlify.app/"},
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