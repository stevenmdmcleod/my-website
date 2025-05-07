import "./Projects.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
    const navigate = useNavigate();
    return (
        <div className="projects-page">
            <div className="container">
                <h1>My Projects</h1>
                <p>Here are some of my projects.</p>
                <button className="projects-button" onClick={() => {navigate("/home")}}>
                    Go Back Home
                </button>
                <img src="../projects.jpg" alt="My Projects" className="projects-image" />
            </div>
        </div>
    );
}