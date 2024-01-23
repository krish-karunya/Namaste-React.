import ResturantCard from "./ResturantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  // console.log("rendered");
  //Local State Variable -  Super powerful variable
  // console.log(resList[0].info.name);
  // console.log(useState()); this will give output as a array [undefine, function]

  const [listOfResturant, setListOfResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRes, setFilterRes] = useState([]);

  // Whenever state variable update, teact trigger reconcoliation cycle(re-render the component)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1058042&lng=80.2156402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // console.log(data);
    const json = await data.json();
    // console.log(json);

    setListOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional  Rendering :
  // Rendering on the basis of condition is known as conditional rendering
  // if (listOfResturant.length === 0) {
  //   return <Shimmer />;
  // }

  // Ternary Operator :

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filterRestaurant = listOfResturant.filter((res) => {
                console.log(res.info.name);
                console.log(searchText);
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());

                // console.log(
                //   res.info.name.toLowerCase().includes(searchText.toLowerCase())
                // );
              });
              console.log(filterRestaurant);
              setFilterRes(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filterList = listOfResturant.filter((res) => {
              return res.info.avgRating > 4.2;
            });
            setFilterRes(filterList);
            console.log(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterRes.map((res) => (
          <Link to={"/restaurant/" + res.info.id}>
            <ResturantCard key={res.info.id} resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
