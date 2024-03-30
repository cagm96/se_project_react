import "./ItemCard.css";
import React, { useRef } from "react";
const ItemCard = ({ item, onSelectCard }) => {
  const card = useRef();
  return (
    <div className="card" id={item._id} ref={card}>
      <div>
        <img
          src={item.imageUrl}
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
