import "./Home.css";
//import React from "react";
//import { loadFireflyPreset } from "tsparticles-preset-firefly";
//import Particles from "react-tsparticles";
//import { Engine } from "@tsparticles/engine";
//import confetti from "canvas-confetti";

export default function Home() {

    /*const particlesInit = async (engine: Engine | any) => {
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
  };*/

  return (
    
    <div className="home">
        
      <div className="container">
      
        <div className="home-content"
          //onClick={handleClick}>
            >{/* Uncomment this line to enable confetti on click */}

          <div className="header" >
          <h1>WELCOME TO THE FUTURE</h1>
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

            <div className="car-container">

                <div className="car-forward">
                    <img src="../src/assets/flyingcar-1.png" alt="" className="car" id="car1" />
                </div>

                <div className="car-backward">
                <img src="../src/assets/flyingcar-1.png" alt="" className="car" id="car2"/>
                </div>

                <div className="car-forward">
                <img src="../src/assets/flyingcar-1.png" alt="" className="car" id="car3"/>
                </div>

                <div className="car-backward">
                <img src="../src/assets/flyingcar-1.png" alt="" className="car" id="car4"/>
                </div>

                <div className="car-forward">
                <img src="../src/assets/flyingcar-1.png" alt="" className="car" id="car5"/>
                </div>

            </div>
    </div>
  );
}
