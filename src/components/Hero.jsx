import React from "react"
import './Hero.css'

function Hero() {
    return(
        <div id="home" className="hero-section flex flex-col items-center text-center py-20 mb-2">
            <img className="h-50 w-auto"src="src/assets/profile.jpg" alt="Image of Matthew James Patefield"/>
            <h1 className="hero-name">Matthew James Patefield</h1>
            <p className="hero-tag">Developer in training..</p>
        </div>
    )
}

export default Hero