import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to Expense Tracker</h1>
        <p>Track your expenses easily and efficiently</p>
      </div>
      <div className="hero-image">
        {/* Add an image or graphic here */}
      </div>
    </div>
  );
};

export default HeroSection;
