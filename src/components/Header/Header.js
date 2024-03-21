import "./Header.css";
import avatar from "../../images/avatar.svg";
import headerLogo from "../../images/logo.svg";
import ToggleSwitch from "../WeatherCard/ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getForecastWeather } from "../../utils/WeatherApi";
import * as constants from "../../utils/Constants";

const Header = ({ onCreateModal, city }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={headerLogo} alt="logo" />
          </Link>
        </div>
        <div className="header__date">
          {constants.formattedDate}
          {city}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            type="text"
            className="header__button"
            onClick={onCreateModal}
          >
            + Add clothes
          </button>
        </div>
        <Link className="header__name" to="/profile">
          Name
        </Link>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
