import "./About.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
    return (
        <div className="about-page">
            <div className="container">
                <h1 id="about-header">About Me</h1>
                <p>My name is Steven McLeod and I am a software engineer with a passion for development</p>
                <p>I have worked with many different technologies ranging from backend to frontend 
                    and even Unity for game development</p>
                <p>I am currently working as a fullstack developer utilizing technologies 
                    such as NodeJS, ExpressJS, TypeScript, React, and AWS services</p>
                    <p>Below are some of my links:</p>
                    <u>
                    <a href="https://github.com/stevenmdmcleod" target="_blank" rel="noopener noreferrer">Visit my Github</a>
                    <br />
                    <a href="https://www.linkedin.com/in/steven-mcleod/" target="_blank" rel="noopener noreferrer">Visit my LinkedIn</a>
                    <br />
                    <a href="mailto:stevenmdmcleod@gmail.com" target="_blank" rel="noopener noreferrer">Email Me</a>
                    </u>
            </div>
        </div>
    );
}