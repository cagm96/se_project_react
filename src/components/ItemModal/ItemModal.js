import "../ItemModal/ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal `}>
      <div className="modal__image">
        <button
          type="button"
          className="modal__button"
          onClick={onClose}
        ></button>
        <img src={selectedCard.link} className="modal__picture" />
        <div className="modal__name">{selectedCard.name}</div>
        <div className="modal__weather-type">
          {" "}
          Weather type: {selectedCard.weather}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
