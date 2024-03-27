import ItemCard from "../ItemCard/ItemCard";
import "../ClothesSection/ClothesSection.css";
const ClothesSection = ({ openModal, data, onSelectCard }) => {
  return (
    <section className="clothes-section">
      <div>
        <div className="clothes-section__cards-header">
          <h3 className="clothes-section__card-title">Your items</h3>
          <button
            type="text"
            className="clothes-section__button"
            onClick={openModal}
          >
            + Add new
          </button>
        </div>
        <section className="clothes-section__card-items">
          {data.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default ClothesSection;
