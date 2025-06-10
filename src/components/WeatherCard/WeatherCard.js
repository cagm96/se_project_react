import "./WeatherCard.css";
import React from 'react';
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { weatherOptions } from "../../utils/Constants";
import { useContext } from "react";
const WeatherCard = ({ day, type, weatherTemp }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather_info">
        {weatherTemp}° {currentTemperatureUnit}
      </div>
      <img
        src={imageSrcUrl}
        className="weather_image"
        alt={"weather banner image"}
      ></img>
    </section>
  );
};

export default WeatherCard;

// Use it to modify the temperature value displayed on the card.
//  If you made the temperature object as we showed above,
//  the following value can be displayed:

// // {weatherData.temperature[currentTemperatureUnit]}
