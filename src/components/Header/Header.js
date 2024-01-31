import "./Header.css";
import avatar from "../../images/avatar.svg";
import headerLogo from "../../images/logo.svg";
import { getForecastWeather } from "../../utils/WeatherApi";
import * as constants from "../../utils/Constants";

const Header = ({ onCreateModal }, city) => {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src={headerLogo} alt="logo" />
          </div>
          <div className="header__date">
            {constants.formattedDate}
            {city}
          </div>
        </div>
        <div className="header__avatar-logo">
          <div>
            <button
              type="text"
              className="header__button"
              onClick={onCreateModal}
            >
              + Add clothes
            </button>
          </div>
          <div className="header__name">Name</div>
          <div>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </header>
      <hr className="header__horizontal-rule "></hr>
    </div>
  );
};

export default Header;
