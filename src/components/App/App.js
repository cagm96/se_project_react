import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather } from "../../utils/WeatherApi";
import { parseWeatherData } from "../../utils/WeatherApi";
import * as constant from "../../utils/Constants";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
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

  console.log(typeof city);
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
      <Header onCreateModal={handleCreateModal} city={city} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title="New garment"
          onClose={handleCloseModal}
          buttonText="Add garment"
        >
          <div className="modal__inputs">
            <label className="modal__label" for="nameInput">
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
            <label className="modal__label" for="urlInput">
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
                <label className="modal__label" for="hot">
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
                <label className="modal__label" for="warm">
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
                <label className="modal__label" for="cold">
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
    </div>
  );
}

export default App;
