import React from "react";
import { Hero } from "neal-react";

export const Header = () => (
  <Hero backgroundImage="img/hacker_back_small.jpg" className="text-xs-center">
    <div className="heroContent">
      <div className="headerLogos">
        <img className="logoFirst" src={'img/logo_transparent.png'} />
        <a href="http://www.8bitrockr.com" target="_blank"><img src="img/logo_square.png"/></a>
      </div>
      <h1>Reackathon</h1>
      <h3>Join Vietnam's first React Hackathon!</h3>
      <p>17th & 18th Dec 2016 @ Ho Chi Minh City, Vietnam</p>
      <p><a className="btn btn-white" data-toggle="modal" data-target="#signup-modal">Register</a></p>
    </div>
    <div className="heroOverlay"></div>
  </Hero>
);
