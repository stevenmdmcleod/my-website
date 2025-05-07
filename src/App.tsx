import React from 'react';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import NotFound from './pages/NotFound/NotFound';
import "./App.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


export default function App() {


    return (
        <>
        <Navbar/>
        
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
        </>
    );
}
    