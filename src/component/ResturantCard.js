import { CDN_URL } from "../utils/constant";

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const ResturantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resData.info;
  return (
    <div className="res-card" style={styleCard}>
      <div className="res-image">
        <img src={CDN_URL + cloudinaryImageId} alt="food-image" />

        <h4>{name}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} Star rating </h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default ResturantCard;
