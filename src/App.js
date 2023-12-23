// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Title from './components/Title';
import About from './components/About';
import Products from "./components/Products";
import "./App.css";
import ContactInfo from './components/ContactInfo';
import Mission from "./components/Mission";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <Title />
        <div className="container">
          <div className="hover-container">
            <h1 className='message-container'>Welcome to my heart hub!!</h1>
            <h1 className='message-container'>Brace yourself for a journey</h1>
            <h1 className='message-container'>Where every purchase will warm</h1>
            <h1 className='message-container'>Your heart and put smiles</h1>
            <h1 className='message-container'>On children's faces.</h1>
          </div>
        </div>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactInfo />} />
          <Route path="/mission" element={<Mission />} />
          {/* Add other routes for your pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
