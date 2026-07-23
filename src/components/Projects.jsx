import React from "react";
import ProjectCard from "./ProjectCard";
import JsProjectImg from '../assets/JSProjectImg.png'
import memoryFlipGameImg from '../assets/memoryFlipGameImg.png'
import htmlWebsiteImg from '../assets/htmlWebsiteImg.png'
import ReactPortImg from '../assets/REACTportImg.png'

function Projects() {

    const projectList = [{img: htmlWebsiteImg, 
        title: "HTML & CSS based website", 
        description: "A 5-page HTML & CSS site for a fictional yacht touring company. Covers semantic markup, forms, tables, and a responsive image gallery, styled entirely with custom CSS.", 
        githubLink: "https://github.com/MPatefield/HTML-Yachting-Project", 
        netlifyLink: "https://classy-chaja-1670f0.netlify.app/"},
        {img: JsProjectImg, 
        title: "Online Diary Project", 
        description: "This is my main JavaScript project that I completed. Details contained within READ.md. Available to view via GitHub or Netlify using the buttons below.", 
        githubLink: "https://github.com/MPatefield/ITOL-Diary-Project", 
        netlifyLink: "https://euphonious-vacherin-96ee25.netlify.app/"},
        {img: ReactPortImg, 
        title: "Portfolio Website", 
        description: "You're looking at it! This portfolio is my React project — built with reusable components, props, and dynamic rendering via .map(), styled with Tailwind and custom CSS.", 
        githubLink: "https://github.com/MPatefield/MJP-Portfolio-Website", 
        netlifyLink: "https://flourishing-brigadeiros-4a54c7.netlify.app/"},
        {img: memoryFlipGameImg, 
        title: "Memory Flip Card Game", 
        description: "A retro arcade style memory matching game built entirely in vanilla JavaScript. Flip cards to find matching pairs, race the clock, and track your move count, complete with a win screen and instant replay..", 
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