import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModa";
import { useEffect, useState } from "react";
import { getForecastWeather } from "../../utils/WeatherApi";
import { parseWeatherData } from "../../utils/WeatherApi";
import { currentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "../Profile/Profile";
import { getItemList, removeItem, addItem } from "../../utils/api";
import ItemCard from "../ItemCard/ItemCard";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    getItemList().then((responseData) => {
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

    // removeItem(selectedCard._id).then((responseData) => {
    //   handleCloseModal();
    //   divToRemove.remove();
    // });
    const divToRemove = document.querySelectorAll(selectedCard._id);
    console.log(divToRemove);
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };
  const cardList = document.querySelector(".card__items");
  const handleAddItemSubmit = (e) => {
    cardList.append(
      <div className="card">
        <div>
          <img
            src={imageUrl}
            alt={name}
            className="card__image"
            //onClick={() => onSelectCard(item)}
          />
        </div>
        <h3 className="card__name-container">
          <div className="card__name">{name}</div>
        </h3>
      </div>
    );
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
            setName={setName}
            setImageUrl={setImageUrl}
            setWeather={setWeather}
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
      </currentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
