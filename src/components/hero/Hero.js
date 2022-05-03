import React from "react";
import "./HeroStyle.css";

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <h1>F-16</h1>
          <h1 className="blue">Refurbishment</h1>
          <h1>Program</h1>
          <div>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
