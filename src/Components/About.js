import React from "react";
import aboutImage from "../images/th.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h1>About us</h1>
        <p>
          Order a delicious pizza on the go, anywhere, anytime. Pizza Hut is happy to assist you with your home delivery. 
           Every time you order, you get a hot and fresh pizza delivered at your doorstep in less than thirty minutes.
        </p>
       <p>Hurry up and place your order now!</p>
        <button>React More</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
    </div>
  );
};

export default About;
