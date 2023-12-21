// About.js
import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    console.log('About component rendered');
  }, []);

  return (
    <div className="about-container">
      <img
        className="owner-image"
        url="/lana2.jpg" // Use the correct path from the public folder
        alt="Owner"

      />
      <div className="owner-description">
        <h4>Lana's Hope</h4>
        <p>
          The word spread quickly through the community about Lana's heartfelt initiative. 
          Parents, friends, and neighbors rallied behind her cause, purchasing her handmade bead products and, 
          in turn, contributing to her mission of giving hope to children in need. 
          Every bead creation carried a story, a piece of Lana's heart woven into each design. Her mission is personal yet global.
        </p>
      </div>
    </div>
  );
};

export default About;
