import React from 'react';
import myPicture from '../../assets/images/ryan-potere-photo.png'

export default function About() {
    return (
        <div className="about-me">
            <h1>About Me</h1>
            <div className="img-box">
            <img className="" src={myPicture} alt="Junior developer"/>
            </div>
            <p>My name is Ryan Potere, I am a junior developer with a passion for web design. Follow me as I continue on my journey of becoming a web developer!</p>
        </div>
    )
}