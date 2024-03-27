import React from "react";
import Avatar from "../../images/avatar.svg";
import "../Profile/Profile.css";
import ItemCard from "../ItemCard/ItemCard";

const Profile = ({ openModal, data, onSelectCard }) => {
  //You need to include the SideBar component  in the Profile component.
  //You need to include the ClothesSection component  in the Profile component.
  return (
    <div className="profile">
      <div className="profile__side-bar">
        <img src={Avatar} alt="logo" />
        <h3 className="profile__name">Name</h3>
      </div>
      <section className="profile_main-section">
        <div>
          <div className="profile__cards-header">
            <h3 className="profile__card-title">Your items</h3>
            <button type="text" className="profile__button" onClick={openModal}>
              + Add new
            </button>
          </div>
          <section className="profile__card-items">
            {data.map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            ))}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Profile;
