import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data);

  const handleClick = () => {
    // return console.log("clicked");
    // setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div className=' text-slate-800'>
      <div
        className=' my-4 shadow-xl p-4 max-w-full md:w-6/12
       m-auto  '>
        <div
          className='flex justify-between cursor-pointer'
          onClick={handleClick}>
          <span className='font-bold text-xl '>
            {data.title}({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
