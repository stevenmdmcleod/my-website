import "./Projects.css";
//import React from "react";
//import { useNavigate } from "react-router-dom";

export default function Projects() {

    return (
        <div className="projects-page">
            <div className="container">
                <h1>Projects</h1>
                <div className="projects-container">
                    <div className="project-card" >
                        
                        <h2>My Movie List</h2>
                        <img src="../src/assets/project-pictures/my-movie-list.png" alt="" className="project-image" />
                        <p>My-Movie-List is a web application that allows users to share and collaborate on movie "watchlists"
                            with their friends. Users can create, edit, and delete watchlists, as well as add movies to them.
                            The application is built using React, Node.js, and DynamoDB, and is designed to be user-friendly and responsive.
                        </p>
                        
                    <a href="http://production-my-movie-list-frontend.s3-website.us-east-2.amazonaws.com/" target="_blank" rel="noopener noreferrer">Checkout My Movie List!</a>
                    
                    </div>
                    <div className="project-card" >
                        
                        <h2>Cyber Surfer</h2>
                        <img src="../src/assets/project-pictures/cyber-surfer.png" alt="" className="project-image" />
                        <p>Cyber Surfer is a virtual reality game developed using Unity and C# which allows users to race through
                            different tracks in a futuristic city. The game features multiple courses, power-ups, and obstacles to navigate.
                        </p>
                              
                    <a href="https://www.youtube.com/watch?v=XW7V31jU0dI&list=PL3--S1vfTH7Fyork0qQuOXZk98Ifr_GOW&index=12" target="_blank" rel="noopener noreferrer">Checkout Cyber Surfer!</a>
                    
                    </div>
                    
               </div>
            </div>
        </div>
    );
}