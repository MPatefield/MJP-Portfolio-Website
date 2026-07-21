import React from "react";
import './Footer.css';

function Footer() {
    return(
        <footer className="footer">
            <p>&copy;{new Date().getFullYear()} Matthew James Patefield. All rights reserved.</p>
            <div className="contact-buttons">
            
            <a href="mailto:m.patefield95@hotmail.co.uk">Email me</a>
            <a href="https://github.com/MPatefield?tab=repositories">GitHub</a>
            <a href="https://www.linkedin.com/in/matthew-patefield/">LinkedIn</a>
            
            </div>
        </footer>
    )
}

export default Footer