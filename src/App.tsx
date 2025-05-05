import React from 'react';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
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
            <Route path="*" element={<NotFound/>} />
        </Routes>
        </>
    );
}
    