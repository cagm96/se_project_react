import React from "react";
import SideBar from "../SideBar/SiderBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "../Profile/Profile.css";

const Profile = ({ openModal, data, onSelectCard }) => {
  //You need to include the SideBar component  in the Profile component.
  //You need to include the ClothesSection component  in the Profile component.
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        openModal={openModal}
        data={data}
        onSelectCard={onSelectCard}
      />
    </div>
  );
};

export default Profile;
{
  /* <section className="profile_main-section">
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
    </div> */
}
