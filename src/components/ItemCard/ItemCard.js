import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card">
      <div>
        <img
          src={item.link}
          alt={item.name}
          className="card__image"
          onClick={() => onSelectCard(item)}
        />
      </div>
      <h3 className="card__name-container">
        <div className="card__name">{item.name}</div>
      </h3>
    </div>
  );
};

export default ItemCard;
