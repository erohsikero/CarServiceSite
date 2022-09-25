import React from 'react';
import Marquee from 'react-fast-marquee';
import './marqueeLogoRoller.css'
import googlePlaces from "../googleMapsReivews/google-maps-reviews";


function marqueeLogoRoller() {
  return (googlePlaces(window.google, "google-reviews", {
    placeId: "ChIJnRuSq41jUjoR7qmfGJzgg_M",
  })
  );
}

export default marqueeLogoRoller;
