import { useState, useEffect } from "react";
import { MENU_API } from "./constant";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
    // console.log(json);
    // console.log(json.data.cards[0].card.card.info);
  };
  return resInfo;
};

export default useRestaurantMenu;
