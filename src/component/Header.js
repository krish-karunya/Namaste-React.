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
    <div className='flex justify-between items-center shadow-md h-24 text-gray-500 font-sans font-semibold  w-full '>
      <div>
        <img src={LOGO_URL} alt='logo' className='h-auto bg-transparent ml-5' />
      </div>
      <div className='ml-10'>
        <ul className='flex gap-5 mr-5 md:ml-10 items-center'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact us</Link>
          </li>
          <li>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li>
            <Link to='/cart'> Cart- {cartItem.length} Items</Link>
          </li>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"} </li>
          <button
            className='bg-slate-300 p-2 m-2 rounded-lg hover:bg-slate-200'
            onClick={() => {
              btnName === "Log In"
                ? setBtnName("Log Out")
                : setBtnName("Log In");
              // console.log(btnName);
            }}>
            {btnName}
          </button>
          {/* <li>{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
