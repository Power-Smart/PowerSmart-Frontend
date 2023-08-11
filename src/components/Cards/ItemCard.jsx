import React from "react";
import { Link } from "react-router-dom";



const ItemCard = ({ price, description, name, quantity, image, addDel = true }) => {
  return (
    <div className="text-sm flex flex-col border-solid border border-secondaryBlue w-[200px] h-auto bg-[#1C1C2E] rounded-3xl shadow-md px-2 pb-5 m-5 justify-evenly">
      <div className="item-image rounded-es-3xl rounded-ee-3xl mx-auto bg-white">
        <img
          className="object-cover rounded-es-3xl rounded-ee-3xl h-20 w-20"
          src={image}
          alt="item"
        />
      </div>
      <div className="text-md my-2 mx-auto text-center">{name} </div>
      <div className="text-xs w-4/5 mx-auto font-thin text-[#cecece] text-center h-30">
        {description}
      </div>
      <div className="mt-4 mb-3 text-center">
        <div className="text-sm text-secondaryText">Qty {quantity}</div>
        <div className="text-lg">Rs. {price}</div>
      </div>

      {addDel && <div className="flex justify-evenly items-center">
        <Link to='/tech/selectPlaceRoom'>
          <button className="px-4 py-1 w-20 text-sm bg-primaryBtn rounded-2xl text-black bg-[#83BCFF]">
            Edit
          </button>
        </Link>
        <button className="px-4 py-1 w-20 text-sm bg-secondaryBtn rounded-2xl text-black bg-[#FF8383]">
          Delete
        </button>
      </div>}
      {!addDel && <div className="flex justify-evenly items-center">
        <Link to='/tech/selectPlaceRoom'>
          <button className="px-4 py-1 text-sm bg-primaryBtn rounded-2xl text-black bg-[#83BCFF]">
            Add to Cart
          </button>
        </Link>
      </div>}
    </div>
  );
};

export default ItemCard;
