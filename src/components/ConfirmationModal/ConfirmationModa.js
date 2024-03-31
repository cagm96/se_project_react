import "../ConfirmationModal/ConfirmationModal.css";

const ConfirmationModal = ({ onClose, handleCardDelete }) => {
  return (
    <div className="modal">
      <div className="modal__confirmation-sec">
        <button className="modal__button" onClick={onClose}></button>
        <h3 className="modal__question">
          Are you sure you want to delete this item?
        </h3>
        <h3 className="modal__question">This action is irreversible.</h3>
        <button className="modal__delete" onClick={handleCardDelete}>
          Yes, delete item
        </button>
        <button className="modal__cancel" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
