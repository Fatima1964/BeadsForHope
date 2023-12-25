// Mission.js

import React from 'react';
import './Mission.css';

const Mission = () => {
  return (
    <div className="mission-container">
      <div className="mission-box-container">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
          At Heart Hub, our mission is to spread love and make a positive impact in the world.
            We are dedicated to contributing to various charitable causes and making a difference
            in the lives of those in need. Through our heartfelt products and initiatives,
            we aim to create a ripple effect of kindness, warmth, and smiles that extends to
            children's faces and beyond.
          </p>
          <img
            src="/heart.png"
            alt="Mission Image"
            // Add your image source and alt text
          />
          <p>
            Hope from Beads!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
