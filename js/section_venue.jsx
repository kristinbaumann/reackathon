import React from "react";
import { Section } from "neal-react";
import { Carousel } from "./carousel.jsx";
const venueImages = [
  {
    src: 'img/venue/presentation1.jpg'
  },
  {
    src: 'img/venue/tables_all.jpg'
  },
  {
    src: 'img/venue/snacks.jpg'
  },
  {
    src: 'img/venue/kitchen.jpg'
  },
  {
    src: 'img/venue/tables_kitchen.jpg'
  },
];

export const Venue = () => (
  <Section heading="" className="white">
    <h2>Venue - Sponsored by <a href="http://www.tinypulse.com" target="_blank"><img className="venueLogo" src="img/tinypulse-logo.png" /></a></h2>
    <p>TinyPulse Office - 18th Floor, Vincom Center, 72 Le Thanh Ton, District 1, Ho Chi Minh City, Vietnam</p>
    <span className={`hiddenMdUp carouselMobile`}>
      <Carousel items={venueImages} />
    </span>
    <span className={`hiddenSmDown carouselDesktop`}>
      <Carousel items={venueImages} />
    </span>
  </Section>
);
