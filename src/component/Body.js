import ResturantCard, { withPromoteLable } from "./ResturantCard";
// import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // console.log("rendered");
  //Local State Variable -  Super powerful variable
  // console.log(resList[0].info.name);
  // console.log(useState()); this will give output as a array [undefine, function]

  const [listOfResturant, setListOfResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRes, setFilterRes] = useState([]);

  const { loggedInUser, setUserName } = useContext(UserContext);

  //HOC (Higher Order Component) -invocation :

  const RestaurantPromotedCard = withPromoteLable(ResturantCard);

  // Whenever state variable update, teact trigger reconcoliation cycle(re-render the component)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // console.log(data);
    const json = await data.json();
    console.log(json);

    setListOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional  Rendering :
  // Rendering on the basis of condition is known as conditional rendering
  // if (listOfResturant.length === 0) {
  //   return <Shimmer />;
  // }

  // Ternary Operator :
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Look like You are offline!!! Please check your interenet connection
      </h1>
    );
  }
  // console.log(json);

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className='flex'>
        <div className='m-4 p-4 '>
          <input
            type='text'
            className='border border-solid border-slate-500 rounded-lg'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className='px-4 py-1 bg-gray-300 m-4  text-slate-700 rounded-lg font-medium hover:bg-slate-200'
            onClick={() => {
              const filterRestaurant = listOfResturant.filter((res) => {
                // console.log(res.info.name);
                // console.log(searchText);
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());

                // console.log(
                //   res.info.name.toLowerCase().includes(searchText.toLowerCase())
                // );
              });
              // console.log(filterRestaurant);
              setFilterRes(filterRestaurant);
            }}>
            Search
          </button>
        </div>
        <div className='flex items-center pr-10'>
          <button
            className='px-4 py-1 bg-gray-300  text-slate-700 rounded-lg font-medium hover:bg-slate-200'
            onClick={() => {
              filterList = listOfResturant.filter((res) => {
                return res.info.avgRating > 4.2;
              });
              setFilterRes(filterList);
              // console.log(filterList);
            }}>
            Top Rated Restaurant
          </button>
        </div>

        {/* <div className='flex items-center'>
          <input
            type='text'
            className='border border-solid border-black rounded-lg m-10'
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div> */}
      </div>
      <div className='flex flex-wrap items-center justify-center '>
        {filterRes.map((res) => (
          <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
            {res?.info?.avgRating > 4 ? (
              <RestaurantPromotedCard resData={res} />
            ) : (
              <ResturantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
