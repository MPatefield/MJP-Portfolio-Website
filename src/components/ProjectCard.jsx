import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import './ProjectCard.css'

function ProjectCard(props) {
    return (
        <div className="project-card rounded-xl p-6">
            <img className=" project-img block mx-auto w-[400px] h-[300px] object-cover" src={props.img} alt={props.title} />
            <div className="text-container flex flex-col justify-center text-center mt-5">
                <h1 className="project-title text-lg font-bold mb-2">{props.title}</h1>
                <p className="project-description">{props.description}</p>
            </div>
            <div className="tag-container flex justify-center gap-10 mt-5 text-2xl">
                <a className="project-tag" target="_blank" href={props.githubLink}><FaGithub /></a>
                <a className="project-tag" target="_blank" href={props.netlifyLink}><FaExternalLinkAlt /></a>
            </div>
        </div>
    )
}

export default ProjectCard