// Home.js
import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        background: 'url("bb2', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust as needed
        display:'-ms-inline-flexbox',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff', // Text color on top of the background
      }}
    >
      <h1>Welcome to Lana's World</h1>
      {/* Add other content as needed */}
    </div>
  );
};

export default Home;
