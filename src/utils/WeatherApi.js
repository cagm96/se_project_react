import { handleServerResponse } from "./api";
import React from 'react';
const latitude = 25.50705777360072; //44.34;
const longitude = -80.40294381900377; // 10.99;
const APIkey = "c9d134f3fc944ec4c4b97662c228c60c";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(handleServerResponse);

  return weatherApi;
};

export const parseWeatherData = (data) => {
  // const main = data.main;
  // const temperature = main && main.temp;

  const temperature = data.main.temp;
  console.log(temperature);

  const weather = {
    F: Math.round(temperature),
    C: Math.round(((temperature - 32) * 5) / 9),
  };
  console.log(weather);
  return weather;
};
