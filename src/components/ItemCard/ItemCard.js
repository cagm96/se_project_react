import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card">
      <div>
        <img
          src={item.link}
          className="card__image"
          onClick={() => onSelectCard(item)}
        />
      </div>
      <div className="card__name-container">
        <div className="card__name">{item.name}</div>
      </div>
    </div>
  );
};

export default ItemCard;
