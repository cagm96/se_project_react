import "../ConfirmationModal/ConfirmationModal.css";

const ConfirmationModal = () => {
  return (
    <div className="modal">
      <div className="modal__confirmation-sec">
        <button className="modal__button"></button>
        <h3 className="modal__question">
          Are you sure you want to delete this item?
        </h3>
        <h3 className="modal__question">This action is irreversible.</h3>
        <button className="modal__delete">Yes, delete item</button>
        <button className="modal__cancel">Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
