import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //Local State Variable -  Super powerful variable
  // console.log(resList[0].info.name);
  // console.log(useState()); this will give output as a array [undefine, function]
  const [listOfResturant, setListOfResturant] = useState(resList);
  return (
    <div className="Body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            filterList = resList.filter((res) => {
              return res.info.avgRating > 4.4;
            });
            setListOfResturant(filterList);
            console.log(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfResturant.map((res) => (
          <ResturantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
