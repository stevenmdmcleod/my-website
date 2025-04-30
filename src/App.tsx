import React from 'react';
import Home from './pages/Home/Home';
import "./App.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom';


export default function App() {


    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
        </Routes>
        
    );
}
    