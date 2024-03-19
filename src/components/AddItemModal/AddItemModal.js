import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDafult();
    onAddItem({ name: name, imageUrl: imageUrl, weather: weather });
  };
  return (
    <ModalWithForm
      title="New garment"
      onClose={handleCloseModal}
      buttonText="Add garment"
      isOpen={isOpen}
      onSubmit={handleSubmit}
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
          onChange={handleNameChange}
        />
        <label className="modal__label" htmlFor="urlInput">
          Image
        </label>
        <input
          className="modal__input-box"
          type="url"
          name="link"
          minLength="1"
          placeholder="Image URL"
          id="urlInput"
          onChange={handleUrlChange}
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
              onChange={handleWeatherChange}
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
              onChange={handleWeatherChange}
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
              onChange={handleWeatherChange}
            />
            <label className="modal__label" htmlFor="cold">
              Cold
            </label>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;

// import React from 'react';
// import './FoodAdder.css';

// class FoodAdder extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       food: '',
//       calories: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.setState({
//       food: '',
//       calories: ''
//     })

//     this.props.handleSubmit(this.state.food, this.state.calories);
//   }
