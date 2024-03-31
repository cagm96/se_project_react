import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext, useMemo, forwardRef } from "react";
import "../Main/Main.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useEffect, useState } from "react";
const Main = forwardRef(
  ({ weatherTemp, onSelectCard, data, handleDelete }, ref) => {
    const { currentTemperatureUnit } = useContext(
      CurrentTemperatureUnitContext
    );
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

    return (
      <main className="main">
        <WeatherCard day={false} type="cloudy" weatherTemp={temp} />

        <section className="card__section" id="card-section">
          Today is {temp}° {currentTemperatureUnit} / You may want to wear:
          <div className="card__items">
            {data
              .filter((item) => item.weather.toLowerCase() === weatherType)
              .map((item) => (
                <ItemCard
                  key={item._id}
                  item={item}
                  onSelectCard={onSelectCard}
                  ref={ref}
                />
              ))}
          </div>
        </section>
      </main>
    );
  }
);
// weatherTemp, onSelectCard, data, handleDelete,
export default Main;
