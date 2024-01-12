import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Constact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
