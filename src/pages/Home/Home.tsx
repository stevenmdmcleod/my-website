import "./Home.css";
import React from "react";
import { loadFireflyPreset } from "tsparticles-preset-firefly";
import Particles from "react-tsparticles";
import { Engine } from "@tsparticles/engine";
import confetti from "canvas-confetti";

export default function Home() {

    const particlesInit = async (engine: Engine | any) => {
        await loadFireflyPreset(engine);
      };

  const handleClick = (e: React.MouseEvent) => {
    confetti({
      particleCount: 30,
      spread: 60,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      },
      colors: ["#ffcc00", "#ff6600", "#ffffff"],
    });
  };

  return (
    
    <div className="home">
        
      <div className="container">
      
        <div className="home-content"
          onClick={handleClick}>
            

          <div className="header" >
          <h1>WELCOME TO THE FUTURE</h1>
            <img src="../future-city-1.jpg" alt="" id="image-background"/>
          </div>
            { /*
          <Particles className="particles"
                id="tsparticles"
                init={particlesInit}
                options={{
                    preset: "firefly",
                    fullScreen: { enable: false }, // Prevent it from overriding your layout
                    background: { color: "#0e0f19" }, // Match your background color
                }} style={{
                    position: "relative",
                    top: 0,
                    left: 0,
                    width: "100vw", // Full viewport width
                    height: "100vh", // Full viewport height
                    zIndex: 0, // Ensure it's behind other elements
                }}/>
            */}
        </div>
      </div>
    </div>
  );
}
