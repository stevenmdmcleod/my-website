
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="not-found-page">
            
            {/*<img src="../future-city-2.webp" alt="" id="not-found-background" />*/}
            <div className="container" >
                <h1>You are not permitted entry</h1>
                <button className="not-found-button" onClick={() => {navigate("/home")}}>
                    Go Back Home
                </button>
                <img src="../cyber-police.jpg" alt="The Police Are Coming For You" className="not-found-image" />
            </div>
            
        </div>
    );
}