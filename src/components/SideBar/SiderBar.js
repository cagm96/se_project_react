import avatar from "../../images/avatar.svg";
import React from 'react';
import "../SideBar/SideBar.css";
const SideBar = () => {
  return (
    <div className="profile__side-bar">
      <img src={avatar} alt="logo" />
      <h3 className="profile__name">Name</h3>
    </div>
  );
};

export default SideBar;
