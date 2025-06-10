import "../ItemModal/ItemModal.css";
import React from 'react';

const ItemModal = ({ selectedCard, onClose, openModal }) => {
  return (
    <div className={`modal `} id={selectedCard._id}>
      <div className="modal__image">
        <button
          type="button"
          className="modal__close-btn"
          onClick={onClose}
        ></button>
        <img
          src={selectedCard.imageUrl}
          className="modal__picture"
          alt={selectedCard.name}
        />
        <div className="modal__name">{selectedCard.name}</div>
        <div className="modal__weather-type">
          {" "}
          Weather type: {selectedCard.weather}
        </div>
        <button type="button" className="modal__delete-btn" onClick={openModal}>
          Delete item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
