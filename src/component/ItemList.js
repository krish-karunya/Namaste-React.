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
    <div className='min-w-96'>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className=' border-gray-200 border-b-2 text-left flex justify-center items-center p-4 '>
            <div className='w-3/12 p-4  relative'>
              <img
                src={CDN_URL + item.card.info.imageId}
                alt='restaurant-image'
                className='w-full rounded-md '
              />
              <button
                className='p-2 w-24 opacity-0.8 text-green-500  font-bold shadow-lg rounded-md  items-center m-auto absolute left-[-10] bg-white hover:bg-slate-300 md:left-10 md:bottom-1 '
                onClick={() => {
                  handleAddItem(item);
                }}>
                Add
              </button>
            </div>
            <div className='w-9/12 py-2 '>
              <span className='font-bold text-slate-700'>
                {item.card.info.name}
              </span>
              <span className='font-semibold'>
                {" "}
                ₹ {item.card.info.price / 100}
              </span>
              <p className='text-sm text-slate-500 font-medium'>
                {item.card.info.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
