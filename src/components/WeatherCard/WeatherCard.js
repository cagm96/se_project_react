import "./WeatherCard.css";

import { weatherOptions } from "../../utils/Constants";

const WeatherCard = ({ day = true, type = "sunny", weatherTemp = 0 }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp}° F</div>
      <img src={imageSrcUrl} className="weather_image"></img>
    </section>
  );
};

export default WeatherCard;
