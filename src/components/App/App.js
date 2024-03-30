import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModa";
import { useEffect, useState, useRef } from "react";
import { getForecastWeather } from "../../utils/WeatherApi";
import { parseWeatherData } from "../../utils/WeatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "../Profile/Profile";
import { getItemList, removeItem, addItem } from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState([]);

  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const [clothingItems, setClothingItems] = useState([]);
  const testRef = useRef(null);
  console.log(testRef);
  useEffect(() => {
    getItemList()
      .then((responseData) => {
        console.log(responseData);
        setClothingItems(responseData);
      })
      .catch((res) => {
        console.log(`Error ${res}`);
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
    removeItem(selectedCard._id)
      .then((responseData) => {
        handleCloseModal();

        removeItem(selectedCard);
        console.log(responseData);
      })
      .catch((res) => {
        console.log(`Error ${res}`);
      });
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleAddItemSubmit = (data) => {
    console.log(data);
    addItem(data)
      .then((res) => {
        console.log(res);
        setClothingItems((prevItems) => [res, ...prevItems]);
      })
      .then(() => {
        handleCloseModal();
      })
      .catch((res) => {
        console.log(`Error ${res}`);
      });
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        console.log(data);
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
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <Header onCreateModal={handleCreateModal} city={city} />

      <Switch>
        <Route exact path="/">
          <Main
            weatherTemp={temp}
            onSelectCard={handleSelectedCard}
            data={clothingItems}
          />
        </Route>
        <Route path="/profile">
          <Profile
            openModal={handleCreateModal}
            data={clothingItems}
            onSelectCard={handleSelectedCard}
          />
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
          selectedCard={selectedCard}
          onClose={handleCloseModal}
          handleCardDelete={handleCardDelete}
        />
      )}
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
