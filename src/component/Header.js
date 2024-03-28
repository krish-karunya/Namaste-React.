import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Log In");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext); //useContext Hook
  // console.log(loggedInUser);

  // Subcribing the store using selector :

  const cartItem = useSelector((store) => {
    return store.cart.items;
  });

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg sm:bg-yellow-200 ">
      <div className="logoContainer">
        <img src={LOGO_URL} alt="logo" className="w-44" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-10 m-4  ">
          <li className="p-4 font-bold hover:bg-slate-300">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 font-bold  hover:bg-slate-300 ">
            <Link to="/about">About us</Link>
          </li>
          <li className="p-4 font-bold  hover:bg-slate-300">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="p-4 font-bold hover:bg-slate-300 ">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4 font-bold  hover:bg-slate-300 text-xl ">
            <Link to="/cart"> Cart- {cartItem.length} Items</Link>
          </li>
          <li className="p-4 font-bold  hover:bg-slate-300 ">
            Online Status: {onlineStatus ? "🟢" : "🔴"}{" "}
          </li>
          <button
            className="p-4 font-bold  hover:bg-slate-300 "
            onClick={() => {
              btnName === "Log In"      
                ? setBtnName("Log Out")
                : setBtnName("Log In");
              // console.log(btnName);
            }}
          >
            {btnName}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
