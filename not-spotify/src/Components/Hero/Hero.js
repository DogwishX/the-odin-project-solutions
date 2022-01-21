import React from "react";

import Button from "../Core/Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Listening is everything</h1>
        <p className="hero__text">
          Millions of songs and podcasts. No credit card needed.
        </p>
        <Button id="hero__button" text="get spotify free" />
      </div>
    </div>
  );
}

export default Hero;
