import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { sebetQutusuState, sebeteElaveEt } from "./../data/slices/Sebet";
import { useDispatch, useSelector } from "react-redux";

function ListItem({ items }) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);
  const [eded, setEded] = useState(items?.count);

  const plusNum = (x) => {
    setEded((prevNum) => Math.max(prevNum + x, 1));
  };

  const handleHover = () => {
    setSearch((search) => !search);
  };

  function SendProductToBasket() {
    const updatedItem = {
      ...items,
      count: eded,
    };
    dispatch(sebeteElaveEt(updatedItem));
  }

  return (
    <>
      {items ? (
        <div className="flex items-center justify-between p-1 bg-white rounded-lg shadow-md mb-2">
          <div className="flex items-center">
            <div className="relative addfav cursor-pointer flex justify-center mr-1">
              <div className="relative">
                <img className=" w-52 h-52 object-cover rounded-md" src={items.img} alt={items.name} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`bg-orange p-2 rounded-full`}>
                    <IoIosSearch className="text-white text-lg" />
                  </div>
                  {search && (
                    <div className="absolute bg-black text-white text-xs rounded py-1 px-2 mt-2">
                      Sürətli baxış
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">{items.name}</h2>
              <div className="text-orange text-2xl font-bold">
                <span>{items.price}</span> <span>₼</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <FaMinus onClick={() => plusNum(-1)} className="text-orange text-lg cursor-pointer" />
            <span className="mx-2 text-lg">{eded}</span>
            <FaPlus onClick={() => plusNum(1)} className="text-orange text-lg cursor-pointer" />
            <button
              onClick={SendProductToBasket}
              className="bg-orange text-white py-1 px-4 rounded-full ml-4"
            >
              Səbətə at
            </button>
          </div>
        </div>
      ) : (
        <div>Item yoxdu</div>
      )}
    </>
  );
}

export default ListItem;

