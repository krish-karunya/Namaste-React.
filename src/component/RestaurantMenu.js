import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwo } = resInfo.cards[0].card.card.info;

  const { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h2>
        {cuisines.join(",")} -{costForTwo / 100}
      </h2>
      {/* <h2>{itemCards[7].card.info.name}</h2> */}
      <ul>
        {" "}
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name}-Rs.{item.card.info.price / 100}
              <h4>{item.card.info.ratings.aggregatedRating.rating}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
