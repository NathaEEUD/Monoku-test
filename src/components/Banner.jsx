import React from "react";
import "../assets/styles/components/Banner.scss";

const Banner = (props) => {
  const { currentDay, currentTime } = props;

  return (
    <div id="banner">
      <span className="banner__date">{currentDay}</span>
      <span className="banner__time">{currentTime}</span>
      <span className="banner__question">¿Qué planeas hacer el día de hoy?</span>
    </div>
  );
};

export default Banner;
