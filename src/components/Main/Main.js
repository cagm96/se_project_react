import { defaultClothingItems } from "../../utils/Constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext, useMemo } from "react";
import "../Main/Main.css";
import { currentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

const Main = ({ weatherTemp, onSelectCard }) => {
  const { currentTemperatureUnit } = useContext(currentTemperatureUnitContext);
  console.log(currentTemperatureUnit);
  const weatherType = useMemo(() => {
    const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
    console.log(temp);
    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp >= 65) {
        return "cold";
      }
    } else if (currentTemperatureUnit === "C") {
      console.log("duh");
    }
  }, []);
  // the calculation on the weather type has to
  // change you have to add a second one
  // that will be checking for F vs C
  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={false} type="cloudy" weatherTemp={weatherTemp} />

      <section className="card__section" id="card-section">
        Today is {weatherTemp}° F / You may want to wear:
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
