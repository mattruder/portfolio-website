import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './Components/Navbar'
import Home from './Components/Home'
import MusicPage from './Components/MusicPage'
import SoftwarePage from './Components/SoftwarePage'
import ContactForm from './Components/ContactForm'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/software" element={<SoftwarePage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
