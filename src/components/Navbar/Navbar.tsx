//import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router";
//import { ReactComponent as HouseLogo } from '../../assets/house-logo-code.svg';

export default function Navbar() {
    let navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="container">
                <button className="logo-button" onClick={() => {navigate("/home")}}>
                    <img src="../house-1.png" alt="hut" className="nav-logo" />
                </button>
                
                
                <button className="button" onClick={() => {navigate("/about")}}>About</button>
                <button className="button" onClick={() => {navigate("/projects")}}>Projects</button>
                <button className="button" onClick={() => {navigate("/resume")}}>Resume</button>
            </div>
        </nav>
    );
}