// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link> {/* Link to the new "About" page */}
      <Link to="/contact">Contact</Link>
     <Link to='/products'>Products</Link>
     <Link to='/mission'>Mission</Link>
    </div>
  );
}

export default Sidebar;
