import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const ResturantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resData.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-sm truncate hover:text-clip	"
      style={styleCard}
    >
      <div className="res-image">
        <div>
          <img
            src={CDN_URL + cloudinaryImageId}
            alt="food-image"
            className="rounded-lg "
          />
        </div>
        <div>
          <h4 className="font-bold py-4">{name}</h4>
          <h4>{cuisines.join(",")}</h4>
          <h4>{avgRating} Star rating </h4>
          <h4>{costForTwo}</h4>
          <h4>Name : {loggedInUser}</h4>
        </div>
      </div>
    </div>
  );
};

//  HOC - Declaration:

export const withPromoteLable = (ResturantCard) => {
  return (props) => {
    // console.log(props.resData);
    return (
      <div>
        <label className="bg-slate-900 shadow-lg  text-white rounded-md font-light p-2">
          Top rated
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};
export default ResturantCard;
