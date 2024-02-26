import React from "react";
import ModalWithForm from "../components/ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  return (
    <ModalWithForm
      title="New garment"
      onClose={handleCloseModal}
      buttonText="Add garment"
      isOpen={isOpen}
      onSubmit={onAddItem}
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
  );
};

export default AddItemModal;
