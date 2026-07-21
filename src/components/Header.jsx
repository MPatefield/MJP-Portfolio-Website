import React from "react";
import './Header.css';
import logo from '../assets/code-mjp-bracket-terracotta.png'

function Header() {
    return(
        <header className="header-section">
            <a href="#home"><img className="h-40 w-auto" src={logo} alt="MJP Coding Logo"></img></a>
            <nav className="nav flex gap-10 justify-center p-2">
                <a className="header-link" href="#home">Home</a>
                <a className="header-link" href="#about">About</a>
                <a className="header-link" href="#skills">Skills</a>
                <a className="header-link" href="#projects">Projects</a>
            </nav>
        </header>
    )
}

export default Header