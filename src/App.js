import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Title from './components/Title';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Products from "./components/Products";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Title />
        <h1 className='message-container'>Welcome to my heart hub!!</h1>
        <h1 className='message-container'>Brace yourself for a journey where every purchase will warm your heart and put smiles on children's faces.</h1>
       
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          {/* Add other routes for your pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
