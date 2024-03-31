import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext, useMemo } from "react";
import "../Main/Main.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const Main = ({ weatherTemp, onSelectCard, data }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp[currentTemperatureUnit];
  const tempF = weatherTemp.F;

  console.log(weatherTemp);
  console.log(temp);

  const weatherType = useMemo(() => {
    if (tempF >= 86) {
      return "hot";
    } else if (tempF >= 66) {
      return "warm";
    } else {
      return "cold";
    }
  });
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
              />
            ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
