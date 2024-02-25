import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather } from "../../utils/WeatherApi";
import { parseWeatherData } from "../../utils/WeatherApi";
import { currentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import * as constant from "../../utils/Constants";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  console.log(currentTemperatureUnit);
  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
        setCity(data.name);
      })
      .catch((res) => {
        console.log(`Error ${res}`);
      });
  }, []);

  return (
    <div>
      <currentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} city={city} />

        <Switch>
          <Route exact path="/">
            <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
          </Route>
          <Route path="/profile">profile</Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <ModalWithForm
            title="New garment"
            onClose={handleCloseModal}
            buttonText="Add garment"
          >
            <div className="modal__inputs">
              <label className="modal__label" htmlFor="nameInput">
                Name
              </label>
              <input
                className="modal__input-box"
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
                placeholder="Name"
                id="nameInput"
              />
              <label className="modal__label" htmlFor="urlInput">
                Image
              </label>
              <input
                className="modal__input-box"
                type="url"
                name="link"
                minLength="1"
                maxLength="30"
                placeholder="Image URL"
                id="urlInput"
              />
            </div>
            <span className="modal__error" id="image-url"></span>
            <div className="modal__radio-btns">
              <p className="modal__radio-title">Select the weather type:</p>
              <div>
                <div className="modal__option">
                  <input
                    className="modal__radio"
                    type="radio"
                    id="hot"
                    value="hot"
                    name="temperature"
                  />
                  <label className="modal__label" htmlFor="hot">
                    Hot
                  </label>
                </div>
                <div className="modal__option">
                  <input
                    className="modal__radio"
                    type="radio"
                    id="warm"
                    value="warm"
                    name="temperature"
                  />
                  <label className="modal__label" htmlFor="warm">
                    Warm
                  </label>
                </div>
                <div>
                  <input
                    className="modal__radio"
                    type="radio"
                    id="cold"
                    value="cold"
                    name="temperature"
                  />
                  <label className="modal__label" htmlFor="cold">
                    Cold
                  </label>
                </div>
              </div>
            </div>
          </ModalWithForm>
        )}
        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </currentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
