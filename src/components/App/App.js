import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModa";
import { useEffect, useState } from "react";

import { getForecastWeather } from "../../utils/WeatherApi";
import { parseWeatherData } from "../../utils/WeatherApi";
import { currentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import * as constant from "../../utils/Constants";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "../Profile/Profile";
import { item } from "../../utils/api";
import { getItemList } from "../../utils/api";
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const [data, setData] = useState([]);

  useEffect(() => {
    getItemList().then((responseData) => {
      console.log(responseData);
      setData(responseData);
    });
  }, []);

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

  const openConfirmationModal = () => {
    setActiveModal("question");
    //  and saves a card to delete in the state
  };

  const handleCardDelete = () => {
    // This handler makes the API call.
    // After a successful API request,
    // the clothingItems state needs to be updated,
    // the modals closed,
    // and the state containing the card should be reset.
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };
  const handleAddItemSubmit = (e) => {
    // e.preventDefault();
    // console.log(e);
    // console.log(e.target);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        console.log(temperature);
        setTemp(temperature);
        setCity(data.name);
      })
      .catch((res) => {
        console.log(`Error ${res}`);
      });
  }, []);
  console.log(temp);
  return (
    <div>
      <currentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} city={city} />

        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              data={data}
            />
          </Route>
          <Route path="/profile">
            <Profile onSelectCard={handleSelectedCard} data={data} />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={handleAddItemSubmit}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            isOpen={activeModal === "create"}
            openModal={openConfirmationModal}
          />
        )}
        {activeModal === "question" && (
          <ConfirmationModal
            onClose={handleCloseModal}
            handleCardDelete={handleCardDelete}
          />
        )}
      </currentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
