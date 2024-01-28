import "./Header.css";
import avatar from "../../images/avatar.svg";
import headerLogo from "../../images/logo.svg";
import { getForecastWeather } from "../../Utils/WeatherApi";

const currentDate = new Date();
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const month = monthsOfYear[currentDate.getMonth()];
const day = currentDate.getDate();
const formattedDate = ` ${month}, ${day} `;
let city = "";

getForecastWeather().then((res) => {
  city = res.name;
});
const Header = ({ onCreateModal }) => {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src={headerLogo} alt="logo" />
          </div>
          <div className="header__date">
            {formattedDate}
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
