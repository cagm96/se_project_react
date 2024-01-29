import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather } from "../../Utils/WeatherApi";
import { parseWeatherData } from "../../Utils/WeatherApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

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

  useEffect(() => {
    getForecastWeather().then((data) => {
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    });
  }, []);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title="New garment"
          onClose={handleCloseModal}
          buttonText="Add garment"
        >
          <div className="modal__inputs">
            <label className="modal__label">Name</label>
            <input
              className="modal__input-box"
              type="text"
              name="name"
              minLength="1"
              maxLength="30"
              placeholder="Name"
            />
            <label className="modal__label">Image</label>
            <input
              className="modal__input-box"
              type="url"
              name="link"
              minLength="1"
              maxLength="30"
              placeholder="Image URL"
            />
          </div>
          <span class="modal__error" id="image-url"></span>
          <div className="modal__radio-btns">
            <p className="modal__radio-title">Select the weather type:</p>
            <div>
              <div className="modal__option">
                <input
                  className="modal__radio"
                  type="radio"
                  id="hot"
                  value="hot"
                />
                <label className="modal__label">Hot</label>
              </div>
              <div className="modal__option">
                <input type="radio" id="warm" value="warm" />
                <label className="modal__label">Warm</label>
              </div>
              <div>
                <input type="radio" id="cold" value="cold" />
                <label className="modal__label">Cold</label>
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
