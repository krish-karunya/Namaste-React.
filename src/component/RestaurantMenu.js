import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const [showItems, setShowItems] = useState(false);
  const [showIndex, setShowIndex] = useState(null);

  // console.log(resId);

  const resInfo = useRestaurantMenu(resId); // custom hook
  // console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwo } = resInfo.cards[2].card.card.info;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  // console.log(itemCards);
  // console.log(
  //   resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  // );
  // console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => {
      return (
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  console.log(categories);

  return (
    <div className='text-center  text-slate-800'>
      <h1 className='font-bold my-5 text-2xl'>{name}</h1>
      <h2 className='font-bold text-lg'>
        {cuisines.join(",")} -{costForTwo / 100}
      </h2>
      {categories.map((category, index) => {
        return (
          // Controlled Component :
          <RestaurantCategory
            data={category.card.card}
            key={category.card.card.title}
            showItems={index === showIndex && true}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
