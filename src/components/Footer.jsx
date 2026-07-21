import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer text-center p-2">
            <p>&copy;{new Date().getFullYear()} Matthew James Patefield. All rights reserved.</p>
            <div className="contact-buttons">
                <nav className="nav flex gap-10 justify-center p-2">
                    <a href="mailto:m.patefield95@hotmail.co.uk">Email me</a>
                    <a href="https://github.com/MPatefield?tab=repositories">GitHub</a>
                    <a href="https://www.linkedin.com/in/matthew-patefield/">LinkedIn</a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer