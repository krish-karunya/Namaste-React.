import React from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItems(item));

    //dipatch function call a action, that action function create a object and assign value  to payload ,this value will pass
    //as a second argument inside the additem action which there in reducer in cartSlice function
    // {
    //  payload : "pizza"
    //}
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className=" border-gray-500 border-b-2 text-left  "
          >
            <div className="w-3/12 p-4  ">
              <img
                src={CDN_URL + item.card.info.imageId}
                alt="restaurant-image"
                className="w-full rounded-md "
              />
              <button
                className="p-2 w-20 bg-green-300 shadow-lg rounded-md  items-center m-auto "
                onClick={() => {
                  handleAddItem(item);
                }}
              >
                Add
              </button>
            </div>
            <div className="w-9/12 py-2 ">
              <span className="font-bold">{item.card.info.name}</span>
              <span> ₹ {item.card.info.price / 100}</span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
