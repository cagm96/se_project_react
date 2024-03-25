import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext, useMemo } from "react";
import "../Main/Main.css";
import { currentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useEffect, useState } from "react";
const Main = ({ weatherTemp, onSelectCard, data }) => {
  const { currentTemperatureUnit } = useContext(currentTemperatureUnitContext);
  const temp = weatherTemp[currentTemperatureUnit];

  console.log(temp);
  const weatherType = useMemo(() => {
    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp >= 65) {
        return "cold";
      }
    } else if (currentTemperatureUnit === "C") {
      if (temp >= 30) {
        return "hot";
      } else if (temp >= 18.8889 && temp <= 29.4444) {
        return "warm";
      } else if (temp >= 18.3333) {
        return "cold";
      }
    }
  }, [currentTemperatureUnit, temp]);
  console.log(weatherType);

  // the calculation on the weather type has to
  // change you have to add a second one
  // that will be checking for F vs C
  // const filteredCards = data.filter((item) => {
  //   return item.weather.toLowerCase() === weatherType;
  // });

  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    if (!data) return;

    const fc = data.filter((item) => {
      return item.weather.toLowerCase() === weatherType;
    });

    setFilteredCards(fc);
  }, [data]);

  return (
    <main className="main">
      <WeatherCard
        day={false}
        type="cloudy"
        weatherTemp={temp}
        temperatureUnit={currentTemperatureUnit}
      />

      <section className="card__section" id="card-section">
        Today is {temp}° {currentTemperatureUnit} / You may want to wear:
        <div className="card__items">
          {filteredCards.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
