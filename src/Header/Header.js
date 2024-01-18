import "./Header.css";
import avatar from "../images/avatar.svg";
import headerLogo from "../images/logo.svg";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src={headerLogo} alt="logo" />
          </div>
          <div>Date</div>
        </div>
        <div className="header__avatar-logo">
          <div>
            <button type="text"> Add New Clothes</button>
          </div>
          <div>Name</div>
          <div>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
