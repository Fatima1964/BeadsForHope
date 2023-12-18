// MotivationalWordsCloud.js
import React from 'react';
import './MotivationalWordsCloud.css';

const MotivationalWordsCloud = ({ headings }) => (
  <div className="tag-cloud-container">
    {headings.map((heading, index) => (
      <div
        key={heading}
        className="motivational-word-container"
        style={{
          fontSize: '18px', // You can customize the font size
          animationDelay: `0.${index}s`,
        }}
        onClick={() => console.log(`Clicked on: ${heading}`)} // Add your click logic here
      >
        {heading}
      </div>
    ))}
  </div>
);

export default MotivationalWordsCloud;
