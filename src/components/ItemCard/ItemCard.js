import "./ItemCard.css";
import React, { useRef, forwardRef } from "react";
const ItemCard = forwardRef(({ item, onSelectCard, ref }) => {
  return (
    <div className="card" id={item._id} ref={ref}>
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
});

export default ItemCard;
