import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btnName, setBtnName] = useState("Log In");
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
          <button
            className="login"
            onClick={() => {
              btnName === "Log In"
                ? setBtnName("Log Out")
                : setBtnName("Log In");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
