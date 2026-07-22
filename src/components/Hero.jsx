import React from "react"
import './Hero.css'
import profileImg from '../assets/profile.jpg'

function Hero() {
    return (
        <div id="home" className="hero-section flex flex-col items-center text-center py-20 mb-2">
            <div className="image-wrapper">
                <img className="hero-img h-45 w-45 object-cover rounded-full" src={profileImg} alt="Image of Matthew James Patefield" />
            </div>
            <h1 className="hero-name">Matthew James Patefield</h1>
            <p className="hero-tag">Developer in training..</p>
        </div>
    )
}

export default Hero