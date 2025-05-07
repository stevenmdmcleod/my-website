import "./Projects.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
    const navigate = useNavigate();
    return (
        <div className="projects-page">
            <div className="container">
                <h1>Projects</h1>
                <div className="projects-container">
                    <div className="project-card" onClick={() => {navigate("/home")}}>
                        <img src="../house-1.png" alt="Project 1" className="project-image" />
                        <h2>Project 1</h2>
                        <p>Description of Project 1</p>
                    </div>
                    <div className="project-card" onClick={() => {navigate("/home")}}>
                        <img src="../house-1.png" alt="Project 2" className="project-image" />
                        <h2>Project 2</h2>
                        <p>Description of Project 2</p>
                    </div>
                    <div className="project-card" onClick={() => {navigate("/home")}}>
                        <img src="../house-1.png" alt="Project 3" className="project-image" />
                        <h2>Project 3</h2>
                        <p>Description of Project 3</p>
                    </div>
               </div>
            </div>
        </div>
    );
}