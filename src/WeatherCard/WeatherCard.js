import "./WeatherCard.css";
const weatherOptions = [
  {
    url: require("../images/day/sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../images/day/cloudy").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../images/night/cloudy").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../images/night/moon").default,
    day: false,
    type: "moon",
  },
];

const WeatherCard = ({ day = true, type = "sunny", weatherTemp = 0 }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp} F</div>
      <img src={imageSrc} className="weather_image" />
    </section>
  );
};

export default WeatherCard;
